const express = require("express");
const app = express();
const mongoDB = require("./db");
mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
    // Additional code here, if needed
  })
  .catch((error) => {
    console.error("An error occurred during database operation:", error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", require("./Routes/DisplayBlogs"));
app.use(express.json());
app.use("/api", require("./Routes/CreateBlog"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
