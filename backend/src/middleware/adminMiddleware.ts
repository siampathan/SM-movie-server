import jwt from "jsonwebtoken";

interface TokenPayload extends jwt.JwtPayload {
  isAdmin: boolean;
}

function isTokenPayload(decoded: unknown): decoded is TokenPayload {
  return (
    typeof decoded === "object" && decoded !== null && "isAdmin" in decoded
  );
}

const adminAuth = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "condition Not Authorized try again...",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET!);
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
  } catch (err: any) {
    console.log(err);
    res.status(401).json({ success: false, message: err.message });
  }
};

export default adminAuth;
