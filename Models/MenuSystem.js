const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orders: { type: String, required: true },
    totalAmount: { type: Number, required: true }
});

module.exports = mongoose.model("Order", OrderSchema);


// class FormModel {
//     constructor(orders, totalAmount){
//         this.orders = orders;
//         this.totalAmount = totalAmount;
//     }
// }

// module.exports = FormModel;

