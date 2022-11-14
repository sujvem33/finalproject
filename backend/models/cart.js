const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    Active: Boolean,
    ModifiedOn: Date,
    Product: [
      {
        Qunantity: { type: String},
        Name:  { type: String, required: true },
        Price:  { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;