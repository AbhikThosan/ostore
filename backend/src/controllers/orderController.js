const Order = require("../models/Order");
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

exports.createOrder = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      user,
      products,
      paymentMethod,
      orderNote,
      shippingCharge,
      subtotal,
      grandTotal,
    } = req.body;

    const order = new Order({
      orderId: `ORD-${uuidv4().slice(0, 8)}`,
      user,
      products,
      paymentMethod,
      orderNote,
      shippingCharge,
      subtotal,
      grandTotal,
    });

    await order.save();
    res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order.orderId });
  } catch (err) {
    next(err);
  }
};
