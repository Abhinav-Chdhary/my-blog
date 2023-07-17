import { Link } from "react-router-dom";
import "./BlogStyle.css";
//import BlogPost from "./BlogPost";

const Blog = (props) => {
    //console.log(props);
    /* const handleClick = (inp) =>{
        return props.sendId(inp.id);
    } */
    const renderList = props.blogs.map((item, index) => (
        <div className="BlogsList" key={item.title}>
            <hr/>
            <Link className="BlogName" to={`/blog/${index}`}>
                <h3>{item.title}</h3>
            </Link>
        </div>
    ));
    return (
        <div className="BlogsDiv">
            <h1 className="BlogsHeading">Blogs</h1>
            {renderList}
        </div>
    );
};

export default Blog;
