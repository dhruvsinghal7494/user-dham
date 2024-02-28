// import mongoose from "mongoose";
const mongoose = require("mongoose");

const goshalaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const goshala = mongoose.model("goshala", goshalaSchema);

module.exports = goshala;
