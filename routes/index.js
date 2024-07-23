const router = require("express").Router();
const productRouter = require("./products/productRouter");
const userRouter = require("./users/userRouter");

router.use("/products", productRouter);
router.use("/users", userRouter);

module.exports = router; 