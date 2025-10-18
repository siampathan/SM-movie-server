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
exports.adminLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD) {
            // Create a payload with meaningful claims
            const payload = {
                email: email,
                isAdmin: true,
            };
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "3h",
            });
            return res.status(200).json({ success: true, token });
        }
        else {
            return res
                .status(401)
                .json({ success: false, message: "Invalid credentials." });
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error." });
    }
});
exports.adminLogin = adminLogin;
//# sourceMappingURL=userController.js.map