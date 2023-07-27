import logo from "./head.png";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <div>
      <nav className="Navbar">
        <div className="title">
          <Link to="/">
            <img src={logo} alt="chris's head cartoon"></img>
          </Link>
          <Link to="/">
            <h1>shaan</h1>
          </Link>
        </div>
        <ul className="otherLinks">
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/abhinavchdhary/">
              Linkedin
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Create">Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navibar;
