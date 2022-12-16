import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/AuthReducer/action";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (isAuth) {
      dispatch(logOut());
    } else {
      navigate("/signin", { return: true });
    }
  };
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h3 className="logo">IndIanBlogger✍️</h3>
      </Link>
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
          <li className="signin">
            <Button
              _hover={{ colr: "red" }}
              onClick={handleOnClick}
              backgroundColor={"transparent"}
              color="white"
            >
              {isAuth ? "LogOut" : "Login"}
            </Button>
          </li>
        </Link>
      </ul>
      <button onClick={() => setMobile(!mobile)} className="menuIcon">
        {mobile ? <CloseIcon fontSize={"22px"} /> : <HamburgerIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
