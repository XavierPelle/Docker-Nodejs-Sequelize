import { Router } from "express";
import {} from "../controllers/product.controller";

export const productRouter = Router();

productRouter.get("/find/all");
productRouter.get("/find/:id");
productRouter.post("/create");
productRouter.put("/update/:id");