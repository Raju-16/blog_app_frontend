import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./AddBlog";
import BlogDetail from "./BlogDetail";
import Blogs from "./Blogs";
import Register from "./Register";
import SignIn from "./SignIn";
import UserBlog from "./UserBlog";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userblogs" element={<UserBlog />} />
      <Route path="/blogdetail/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default AllRoutes;
