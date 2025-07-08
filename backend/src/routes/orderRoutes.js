const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const orderController = require("../controllers/orderController");

router.post(
  "/",
  [
    check("user.name").notEmpty().trim().escape(),
    check("user.email").isEmail().normalizeEmail(),
    check("user.address").notEmpty().trim().escape(),
    check("products")
      .isArray({ min: 1 })
      .withMessage("At least one product is required"),
    check("products.*.productId").notEmpty().trim().escape(),
    check("products.*.productName").notEmpty().trim().escape(),
    check("products.*.category").notEmpty().trim().escape(),
    check("products.*.variant.size").optional().trim().escape(),
    check("products.*.variant.color").optional().trim().escape(),
    check("products.*.quantity").isInt({ min: 1 }),
    check("products.*.price").isFloat({ min: 0 }),
    check("products.*.discount").optional().isFloat({ min: 0, max: 100 }),
    check("products.*.discountedPrice").isFloat({ min: 0 }),
    check("products.*.total").isFloat({ min: 0 }),
    check("paymentMethod")
      .isIn(["cash_on_delivery", "credit_card", "paypal"])
      .withMessage("Invalid payment method"),
    check("orderNote").optional().trim().escape(),
    check("shippingCharge").isFloat({ min: 0 }),
    check("subtotal").isFloat({ min: 0 }),
    check("grandTotal").isFloat({ min: 0 }),
    check("cartId").optional().notEmpty().trim().escape(),
  ],
  orderController.placeOrder
);

module.exports = router;
