import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Filter_Sort from "../Components/Filter_Sort";
import AllBlogs from "./AllBlogs";

const Blogs = () => {
  return (
    <Flex>
      <Box width={{ base: "15%", sm: "20%", lg: "20%" }}>
        <Filter_Sort />
      </Box>
      <Box width={{ base: "85%", sm: "80%", lg: "80%" }}>
        <AllBlogs />
      </Box>
    </Flex>
  );
};

export default Blogs;
