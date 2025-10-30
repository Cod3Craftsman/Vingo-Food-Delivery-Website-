import express from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js";
const authrouter = express.Router();
authrouter.post("/signup", signUp);
authrouter.post("/signin", signIn);
authrouter.get("/signout", signOut);

export default authrouter