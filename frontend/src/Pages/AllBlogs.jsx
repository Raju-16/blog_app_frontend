import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getAllBlogs } from "../Redux/AppReducer/action";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const blogs = useSelector((state) => state.AppReducer.allBlogs);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (blogs.length === 0 || location) {
      let params = {
        category: searchParams.getAll("category"),
        sort: searchParams.get("sort"),
      };

      dispatch(getAllBlogs(params));
    }
  }, [location]);

  return (
    <Box>
      {blogs.length > 0 &&
        blogs.map((item) => {
          return (
            <Link to={`/blogdetail/${item._id}`}>
              <BlogCard item={item} />
            </Link>
          );
        })}
    </Box>
  );
};

export default AllBlogs;
