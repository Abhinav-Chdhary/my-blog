import Blog from "./Pages/Blog.js";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Navibar from "./Navibar.js";
import Create from "./Pages/Create.js";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogPost from "./Pages/BlogPost.js";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [createCall, setcreateCall] = useState(0);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/blogsData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response);
    setBlogs(response);
  };

  const handleBlog = (inp) => {
    setcreateCall(createCall + 1);
  };

  useEffect(() => {
    loadData();
    console.log(createCall);
  }, [createCall]);

  return (
    <div>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog blogs={blogs} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Create" element={<Create handleBlog={handleBlog} />} />
        <Route path="/blog/:id" element={<BlogPost blogs={blogs} />} />
      </Routes>
    </div>
  );
}

export default App;
