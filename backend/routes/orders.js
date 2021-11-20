const express = require('express');
const OrderSchema = require("../dao/models/Orders");

const router = express.Router();

const orders = [];

router.post('/', async (req, res) => {
    const order = new OrderSchema(req.body);
    await order.save().then(() => res.sendStatus(200));
});

router.get('/', async (req, res) => {
    const orders = await OrderSchema.find()
    res.send(orders)
})

module.exports = router;
