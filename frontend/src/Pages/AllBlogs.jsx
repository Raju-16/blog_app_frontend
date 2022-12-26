import { Box, Flex, Grid } from "@chakra-ui/react";
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
    <Box px={"20px"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        justifyItems={"center"}
        marginTop={{ base: "1%", sm: "2%", md: "2%", lg: "2%" }}
        gap={{ base: "1%", sm: "1%", md: "2%", lg: "2%" }}
      >
        {blogs.length > 0 &&
          blogs.map((item) => {
            return (
              <Link to={`/blogdetail/${item._id}`} key={item._id}>
                <BlogCard item={item} />
              </Link>
            );
          })}
      </Grid>
    </Box>
  );
};

export default AllBlogs;
