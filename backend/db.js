const mongoose = require("mongoose");

const mongouri =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.3mzek7v.mongodb.net/blogs_data?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Connected to MongoDB");
    const fetched_blogs = await mongoose.connection.db
      .collection("blogs")
      .find({})
      .toArray();
    //using global variables

    global.blogs_items = fetched_blogs;
    //console.log(fetched_blogs);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDB;
