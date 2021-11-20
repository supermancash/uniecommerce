const express = require('express');
const productsRouter = require('./products');
const ordersRouter = require('./orders');

const router = express.Router();

router.use('/products', productsRouter);
router.use('/orders', ordersRouter);

module.exports = router;
