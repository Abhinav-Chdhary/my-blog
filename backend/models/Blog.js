const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", BlogSchema);
