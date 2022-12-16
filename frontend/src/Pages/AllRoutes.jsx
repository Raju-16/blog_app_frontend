import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../HOC/RequireAuth";
import AddBlog from "./AddBlog";
import BlogDetail from "./BlogDetail";
import Blogs from "./Blogs";
import EditBlog from "./EditBlog";
import Register from "./Register";
import SignIn from "./SignIn";
import UserBlog from "./UserBlog";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route
        path="/addblog"
        element={
          <ReqAuth>
            <AddBlog />
          </ReqAuth>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/userblogs"
        element={
          <ReqAuth>
            <UserBlog />
          </ReqAuth>
        }
      />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/blogdetail/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default AllRoutes;
