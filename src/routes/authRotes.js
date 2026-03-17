import { Router } from "express";

import { loginUser,postUser } from "../controllers/authController.js";

const authRoutes = Router();

authRoutes.post("/auth/login", loginUser);
authRoutes.post("/auth/register", postUser);


export default authRoutes;