import express from "express";
import { googleAuth, resetPassword, sendOtp, signIn, signOut, signUp, verifyOtp } from "../controllers/auth.controllers.js";
const authrouter = express.Router();
authrouter.post("/signup", signUp);
authrouter.post("/signin", signIn);
authrouter.get("/signout", signOut);

authrouter.post("/send-otp", sendOtp);
authrouter.post("/verify-otp", verifyOtp);
authrouter.post("/reset-password", resetPassword);


authrouter.post("/google-auth", googleAuth);


export default authrouter;
