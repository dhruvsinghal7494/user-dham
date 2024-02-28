// import mongoose from "mongoose";
const mongoose = require("mongoose");

const visheshKripaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    samagri: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const VisheshKripa = mongoose.model("VisheshKripa", visheshKripaSchema);

module.exports = VisheshKripa;
