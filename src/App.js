import Blog from "./Pages/Blog.js";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Navibar from "./Navibar.js";
import Create from "./Pages/Create.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import BlogPost from "./Pages/BlogPost.js";

function App() {
    const [blogs, setBlogs] = useState([]);

    const handleBlog = (inp) => {
        setBlogs((prevBlogs) => [...prevBlogs, inp]);
    };
    return (
        <div>
            <Navibar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog blogs={blogs} />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/Create"
                    element={<Create handleBlog={handleBlog} />}
                />
                <Route
                    path="/blog/:id"
                    element={<BlogPost blogs={blogs} />}
                />
            </Routes>
        </div>
    );
}

export default App;
