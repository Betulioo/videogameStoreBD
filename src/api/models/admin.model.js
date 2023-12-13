const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    shopname: { type: String },
    address: { type: String },
    city: { type: String },
    role: { type: String, default: "admin" },
  },
  {
    collection: "admin",
  }
);

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
