const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    customer: {
        name: {type: String, required: true},
        address: {type: String, required: true},
        email: {type: String, required: true}
    },
    cart: []
});


const OrderSchema = mongoose.model("Order", schema);

module.exports = OrderSchema;