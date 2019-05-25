const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const ProductSchema = new Schema({
    catagory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    },
    productName: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    addedBy: {
      type: String,
      required: true
    }
})


ProductSchema.methods.toJson = function () {
    return {
      catagory: this.catagory,
      price: this.price,
      quantity: this.quantity,
      productName: this.productName,
      description: this.description,
      image: this.image,
      addedBy: this.addedBy
    }
  }
  
  module.exports = mongoose.model('Product', ProductSchema);