import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Filter_Sort from "../Components/Filter_Sort";
import AllBlogs from "./AllBlogs";

const Blogs = () => {
  return (
    <HStack>
      <Filter_Sort />
      <AllBlogs />
    </HStack>
  );
};

export default Blogs;
