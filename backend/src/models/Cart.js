const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cartId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String, required: true },
        productName: { type: String, required: true },
        category: { type: String, required: true },
        variant: {
          size: String,
          color: String,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        discountedPrice: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
    createdAt: { type: Date, default: Date.now, expires: "7d" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
