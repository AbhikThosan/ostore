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
    check("products").isArray({ min: 1 }),
    check("products.*.productId").notEmpty().trim().escape(),
    check("products.*.quantity").isInt({ min: 1 }),
    check("paymentMethod").notEmpty().trim().escape(),
    check("shippingCharge").isFloat({ min: 0 }),
    check("subtotal").isFloat({ min: 0 }),
    check("grandTotal").isFloat({ min: 0 }),
  ],
  orderController.createOrder
);

module.exports = router;
