const mongoose = require("mongoose");

const mongouri =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.3mzek7v.mongodb.net/blogs_data?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Connected to MongoDB");
    const changeStream = mongoose.connection.collection("blogs").watch();

    // Listen for changes in the collection
    changeStream.on("change", async (change) => {
      if (change) {
        // Fetch the latest blogs after a new blog is added
        const fetched_blogs = await mongoose.connection
          .collection("blogs")
          .find({})
          .toArray();

        // Update the global variable with the latest blogs
        global.blogs_items = fetched_blogs;
      }
    });
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
