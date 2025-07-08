const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { validationResult } = require("express-validator");

exports.addToCart = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cartId, product } = req.body;

    const productDoc = await Product.findOne({ productId: product.productId });
    if (!productDoc) {
      return res.status(404).json({ message: "Product not found" });
    }

    const variant = productDoc.variants.find(
      (v) =>
        v.size === product.variant.size && v.color === product.variant.color
    );
    if (!variant || variant.available < product.quantity) {
      return res
        .status(400)
        .json({ message: "Selected variant is unavailable or out of stock" });
    }

    let cart = await Cart.findOne({ cartId });
    if (!cart) {
      cart = new Cart({ cartId, products: [] });
    }

    const existingProduct = cart.products.find(
      (p) =>
        p.productId === product.productId &&
        p.variant.size === product.variant.size &&
        p.variant.color === product.variant.color
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      existingProduct.total =
        existingProduct.quantity * existingProduct.discountedPrice;
    } else {
      cart.products.push({
        productId: product.productId,
        productName: product.productName,
        category: product.category,
        variant: product.variant,
        quantity: product.quantity,
        price: product.price,
        discount: product.discount,
        discountedPrice: product.discountedPrice,
        total: product.quantity * product.discountedPrice,
      });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    next(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cartId } = req.query;
    const cart = await Cart.findOne({ cartId });

    if (!cart) {
      return res.status(200).json({ cart: { products: [] } });
    }

    for (let cartProduct of cart.products) {
      const productDoc = await Product.findOne({
        productId: cartProduct.productId,
      });
      if (!productDoc) {
        cartProduct.available = false;
        continue;
      }
      const variant = productDoc.variants.find(
        (v) =>
          v.size === cartProduct.variant.size &&
          v.color === cartProduct.variant.color
      );
      cartProduct.available =
        variant && variant.available >= cartProduct.quantity;
    }

    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    next(err);
  }
};

exports.updateCart = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cartId, productId, variant, quantity } = req.body;
    const cart = await Cart.findOne({ cartId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartProduct = cart.products.find(
      (p) =>
        p.productId === productId &&
        p.variant.size === variant.size &&
        p.variant.color === variant.color
    );

    if (!cartProduct) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    const productDoc = await Product.findOne({ productId });
    if (!productDoc) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productVariant = productDoc.variants.find(
      (v) => v.size === variant.size && v.color === variant.color
    );
    if (!productVariant || productVariant.available < quantity) {
      return res
        .status(400)
        .json({ message: "Selected variant is unavailable or out of stock" });
    }

    if (quantity <= 0) {
      cart.products = cart.products.filter(
        (p) =>
          !(
            p.productId === productId &&
            p.variant.size === variant.size &&
            p.variant.color === variant.color
          )
      );
    } else {
      cartProduct.quantity = quantity;
      cartProduct.total = quantity * cartProduct.discountedPrice;
    }

    await cart.save();
    res.status(200).json({ message: "Cart updated", cart });
  } catch (err) {
    next(err);
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cartId } = req.body;
    await Cart.deleteOne({ cartId });
    res.status(200).json({ message: "Cart cleared" });
  } catch (err) {
    next(err);
  }
};
