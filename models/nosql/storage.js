const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    }
  },
  {
    timestamps: true, //TODO create, update
    versionkey: false //TODO create, update
  }
);

module.exports = mongoose.model("storage", StorageScheme);
