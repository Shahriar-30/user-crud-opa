// dependencies
let mongoose = require("mongoose");

// Makeing the Schema
let crudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roll: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true }
);

// Schema to models
let mongoModal = mongoose.model("crud", crudSchema);

// export
module.exports = mongoModal;
