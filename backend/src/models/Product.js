const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    category: { type: String, required: true },
    productImage: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    discountedPrice: { type: Number, required: true },
    fastDelivery: { type: Boolean, default: false },
    rating: {
      rate: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    productDescription: { type: String, required: true },
    variants: [
      {
        size: String,
        color: String,
        available: { type: Number, default: 0 },
      },
    ],
    reviews: [
      {
        username: String,
        comment: String,
        rating: Number,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

productSchema.index({ category: 1 });

module.exports = mongoose.model("Product", productSchema);
