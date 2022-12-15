import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">IndIanBlogger✍️</h3>
      <ul
        className={mobile ? "navMobile" : "navLinks"}
        onClick={() => setMobile(false)}
      >
        <Link to={"/"}>
          <li className="blogs">Blogs</li>
        </Link>
        <Link to={"/addblog"}>
          <li className="addblog">Write Blog</li>
        </Link>
        <Link to={"/userblogs"}>
          <li className="myblogs">User blogs</li>
        </Link>
        <Link to={"/signin"}>
          <li className="signin">SignIn</li>
        </Link>
      </ul>
      <button onClick={() => setMobile(!mobile)} className="menuIcon">
        {mobile ? <CloseIcon fontSize={"22px"} /> : <HamburgerIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
