const mongoose = require("mongoose");
const productSchema = mongoose.Schema
    ({
        name:  { type: String, required: true },
        description:  { type: String, required: true },
        category: {
            type: String,
            enum: {
              values: ["coords", "dresses", "lehengas" , "sarees" , "suits"],
            },
          },
        price:  { type: String, required: true },
        image:  { type: String, required: true },
        isProductAvailable: Boolean
    },
    {timestamps:true }
    );
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
