import { useState } from "react";
import "./CreateStyle.css";

const Create = (props) => {
  //useState to handle inputs
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  //useState for each new blog
  //const [blogs, setBlogs] = useState([]);
  //handle new title and body
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  //add the current blog to blogs
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/createNewBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
      }),
    });
    const json = await response.json();
    console.log(json);
    console.log(json.success);
    const newBlog = 1;
    setInputs({ title: "", body: "" });

    //console.log(blogs);
    props.handleBlog(newBlog);
    window.location.reload(false);
  };
  return (
    <div className="createDiv">
      <h2>Create</h2>
      <form className="createForm" action="/Create" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputs.title}
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          type="text"
          value={inputs.body}
          id="body"
          name="body"
          placeholder="Body"
          onChange={handleChange}
        />
        <input id="submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};
export default Create;
