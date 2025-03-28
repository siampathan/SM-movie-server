import express from "express";
import { adminLogin } from "../controllers/userController";

const adminRouter = express.Router();

adminRouter.post("/admin", adminLogin);

export default adminRouter;
