const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./utils/logger");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("combined", { stream: logger.stream }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
