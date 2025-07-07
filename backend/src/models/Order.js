const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
    },
    products: [
      {
        productId: String,
        productName: String,
        category: String,
        variant: {
          size: String,
          color: String,
        },
        quantity: Number,
        price: Number,
        discount: Number,
        discountedPrice: Number,
        total: Number,
      },
    ],
    paymentMethod: { type: String, required: true },
    orderNote: String,
    shippingCharge: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
