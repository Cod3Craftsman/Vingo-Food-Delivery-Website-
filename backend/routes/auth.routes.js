import express from "express";
import { resetPassword, sendOtp, signIn, signOut, signUp, verifyOtp } from "../controllers/auth.controllers.js";
const authrouter = express.Router();
authrouter.post("/signup", signUp);
authrouter.post("/signin", signIn);
authrouter.get("/signout", signOut);

authrouter.post("/send-otp", sendOtp);
authrouter.post("/verify-otp", verifyOtp);
authrouter.post("/reset-password", resetPassword);


export default authrouter;
