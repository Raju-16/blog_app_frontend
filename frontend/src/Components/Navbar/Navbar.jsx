import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/AuthReducer/action";
import { Button } from "@chakra-ui/react";
import "./navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (isAuth) {
      dispatch(logOut());
    } else {
      navigate("/signin", { replace: true });
    }
  };

  return (
    // <nav className="navbar">
    //       <h3 className="logo">SBBlog</h3>

    //       <ul
    //         className={Mobile ? "nav-link-mobile" : "nav-link"}
    //         onClick={() => setMobile(false)}
    //       >
    //         <Link to="/">
    //           <li>Blogs</li>
    //         </Link>
    //         <Link to="/postblogs">
    //           <li>AddBlog</li>
    //         </Link>
    //         <Link to="/myblog">
    //           <li>MyBlog</li>
    //         </Link>
    //         <li>
    //           <button className="login" onClick={handleLog}>
    //             {isAuth ? "SignOut" : "SignIn"}
    //           </button>
    //         </li>
    //       </ul>
    //       <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
    //         {Mobile ? <ImCross /> : <FaBars />}
    //       </button>
    //     </nav>

    <nav className="navbar">
      <Link to={"/"}>
        <h3 className="logo">IndIanBlogger✍️</h3>
      </Link>
      <ul
        className={mobile ? "nav-link-mobile" : "nav-link"}
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
        <li>
          <button fontSize={"20px"} className="login" onClick={handleOnClick}>
            {isAuth ? "SignOut" : "SignIn"}
          </button>
        </li>
        {/* <Link to={"/signin"}>
          <li fontSize={"20px"} className="signin">
            <Button
              _hover={{ colr: "red" }}
              onClick={handleOnClick}
              backgroundColor={"transparent"}
              color="white"
              fontSize={"20px"}
              fontWeight={"400"}
            >
              {isAuth ? "LogOut" : "Login"}
            </Button>
          </li>
        </Link> */}
      </ul>
      <button onClick={() => setMobile(!mobile)} className="mobile-menu-icon">
        {mobile ? <CloseIcon fontSize={"22px"} /> : <HamburgerIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
