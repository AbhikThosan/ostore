const Product = require("../models/Product");
const { validationResult } = require("express-validator");

exports.getProducts = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { page = 1, limit = 10, search, category } = req.query;
    const query = {};

    if (search) {
      query.productName = { $regex: search, $options: "i" };
    }
    if (category) {
      query.category = category;
    }

    const products = await Product.find(query)
      .select(
        "productId productName category productImage price discount discountedPrice fastDelivery rating"
      )
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Product.countDocuments(query);

    res.json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = await Product.findOne({ productId: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Product.distinct("category");
    res.json({ categories });
  } catch (err) {
    next(err);
  }
};
