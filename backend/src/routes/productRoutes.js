const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const productController = require("../controllers/productController");

router.get(
  "/",
  [
    check("page").optional().isInt({ min: 1 }).toInt(),
    check("limit").optional().isInt({ min: 1, max: 100 }).toInt(),
    check("search").optional().trim().escape(),
    check("category").optional().trim().escape(),
  ],
  productController.getProducts
);

router.get(
  "/:id",
  [check("id").notEmpty().trim().escape()],
  productController.getProductById
);

router.get("/categories", productController.getCategories);

module.exports = router;
