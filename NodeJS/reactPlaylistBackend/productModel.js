const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
  name: String,
  image: String,
  description: String,
});

module.exports = mongoose.model("Product", ProductSchema);
