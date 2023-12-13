const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, require: true },
    location: { type: String, require: true },
    videogames: [{ type: Schema.ObjectId, ref: "videogame" }],
  },
  {
    collection: "shop",
  }
);

const Shop = mongoose.model("shop", shopSchema);
module.exports = Shop;
