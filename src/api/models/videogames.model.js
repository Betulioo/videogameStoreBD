const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videogameSchema = new Schema(
  {
    title: { type: String, require: true },
    genre: { type: String, require: true },
    year: { type: Number },
    country: { type: String },
    image: { type: String, default: "" },
  },
  {
    collection: "videogame",
  }
);

const Videogame = mongoose.model("videogame", videogameSchema);
module.exports = Videogame;
