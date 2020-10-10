const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
  brand: String,
  owner: String,
  color: String,
  size: String,
  price: Number,
  forSale: Boolean,
  image: String
});

const Bike = mongoose.model("Bike", BikeSchema);

module.exports = Bike;
