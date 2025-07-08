const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const cartController = require("../controllers/cartController");

router.post(
  "/",
  [
    check("cartId").notEmpty().trim().escape(),
    check("product.productId").notEmpty().trim().escape(),
    check("product.productName").notEmpty().trim().escape(),
    check("product.category").notEmpty().trim().escape(),
    check("product.variant.size").optional().trim().escape(),
    check("product.variant.color").optional().trim().escape(),
    check("product.quantity").isInt({ min: 1 }),
    check("product.price").isFloat({ min: 0 }),
    check("product.discount").optional().isFloat({ min: 0, max: 100 }),
    check("product.discountedPrice").isFloat({ min: 0 }),
  ],
  cartController.addToCart
);

router.get(
  "/",
  [check("cartId").notEmpty().trim().escape()],
  cartController.getCart
);

router.put(
  "/",
  [
    check("cartId").notEmpty().trim().escape(),
    check("productId").notEmpty().trim().escape(),
    check("variant.size").optional().trim().escape(),
    check("variant.color").optional().trim().escape(),
    check("quantity").isInt({ min: 0 }),
  ],
  cartController.updateCart
);

router.delete(
  "/",
  [check("cartId").notEmpty().trim().escape()],
  cartController.deleteCart
);

module.exports = router;
