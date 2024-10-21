import { Router } from "express";
import {} from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/find/all");
userRouter.get("/find/:id");
userRouter.post("/create");
userRouter.put("/update/:id");