"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function isTokenPayload(decoded) {
    return (typeof decoded === "object" && decoded !== null && "isAdmin" in decoded);
}
const adminAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "condition Not Authorized try again...",
            });
        }
        const token_decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!isTokenPayload(token_decode)) {
            throw new Error("Invalid token structure");
        }
        console.log("Decoded Token: ", token_decode);
        if (!token_decode.isAdmin) {
            return res.status(403).json({
                success: false,
                message: "Not AUthorized try Again!",
            });
        }
        req.use = token_decode;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ success: false, message: err.message });
    }
});
exports.default = adminAuth;
//# sourceMappingURL=adminMiddleware.js.map