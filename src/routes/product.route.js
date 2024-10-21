const express = require("express");
const router = express.Router();
const controller = require("../controller/product.controller");

router.get("/find/all", controller.getAll);
router.post("/create", controller.createProduct);
router.put("/update/:id", controller.updateProduct);
router.delete("/delete/:id", controller.deleteProduct);

module.exports = router;