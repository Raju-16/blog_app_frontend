import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./AddBlog";
import Blogs from "./Blogs";
import Register from "./Register";
import SignIn from "./SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;
