const Order = require("../models/Order");
const Cart = require("../models/Cart");
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

exports.placeOrder = async (req, res, next) => {
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
      cartId,
    } = req.body;

    let orderProducts = products;

    if (cartId) {
      const cart = await Cart.findOne({ cartId });
      if (!cart || cart.products.length === 0) {
        return res.status(400).json({ message: "Cart is empty or not found" });
      }
      orderProducts = cart.products;
    }

    const order = new Order({
      orderId: `ORD-${uuidv4().slice(0, 8)}`,
      user,
      products: orderProducts,
      paymentMethod,
      orderNote,
      shippingCharge,
      subtotal: orderProducts.reduce((sum, p) => sum + p.total, 0),
      grandTotal:
        orderProducts.reduce((sum, p) => sum + p.total, 0) +
        (shippingCharge || 0),
    });

    await order.save();

    if (cartId) {
      await Cart.deleteOne({ cartId });
    }

    res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order.orderId });
  } catch (err) {
    next(err);
  }
};
