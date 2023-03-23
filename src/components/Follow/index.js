import "./index.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Follow = () => {
  return (
    <div className="follow-container">
      <h1 className="sub-head">Follow Me</h1>
      <div className="icon-container">
        <a
          href="https://codepen.io/Ramachandruni-Kousik"
          target="_blank"
          className="icon"
          rel="noreferrer"
        >
          <AiFillCodepenSquare />
        </a>
        <a
          href="https://www.instagram.com/ramachandrunikousik/"
          target="_blank"
          className="icon"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://github.com/kousik2000"
          target="_blank"
          className="icon"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Follow;
