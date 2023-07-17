import "./AboutStyle.css";
const About = () => {
    return (
        <div className="AboutDiv">
            <h1>About</h1>
            <p className="AboutBody">
                This website was inspired by{" "}
                <a href="https://cdixon.org/">Chris Dixon</a>'s personal blog
                website.
                <br />
                It is also the first complete project I made in July 2023 while
                learning full stack web development.
                <hr/>
                You can check out my other projects here:<ul>
                <li><a href="https://github.com/Abhinav-Chdhary">My Github</a></li>
                <li><a href="https://codepen.io/m4st44n/full/XWzYgNp">My Codepen.io</a></li>
                <li><a href="https://abhinav-choudhary.itch.io/">My Itch.io</a></li></ul>
            </p>
        </div>
    );
};
export default About;