import { Router } from "express";
import {login, register, logOut, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post("/register",validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema) ,login);
router.post("/logOut", logOut);
router.get("/profile", authRequired, profile);

export default router