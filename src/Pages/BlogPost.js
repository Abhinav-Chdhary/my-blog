import './BlogPost.css'
import { useParams } from "react-router-dom";

const BlogPost = (props) => {
    const {id} = useParams()
    let blog = props.blogs[id];
    return (
        <div className="blogPostDiv">
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
        </div>
    );
};
export default BlogPost;
