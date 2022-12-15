import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const BlogCard = ({ item }) => {
  return (
    <Box
      width="100%"
      border="1px solid transparent"
      maxH={"auto"}
      display={"flex"}
      marginBottom="2%"
      boxShadow={`rgba(0, 0, 0, 0.24) 0px 3px 8px`}
    >
      {/* image div */}
      <Box
        width={{ base: "70%", lg: "60%" }}
        border="1px solid transparent"
        marginRight={"3%"}
      >
        {/* <Box height={"100%"}> */}
        <Image
          width={{ base: "100%", lg: "100%" }}
          height={{ base: "50%", sm: "100%", md: "100%", lg: "100%" }}
          src={item.image}
        ></Image>
        {/* </Box> */}
      </Box>
      <Box
        width={{ base: "30%", lg: "57%" }}
        border="1px solid transparent"
        height="100%"
      >
        <Text fontFamily={"sans-serif"} fontSize={"12px"} marginTop={"5%"}>
          EDITOR'S PICK
        </Text>
        <Heading fontSize={"24px"} fontFamily={"mono"} marginTop={"2%"}>
          {item.title}
        </Heading>
        {/* <Text
          fontFamily={"cursive"}
          marginTop={"1%"}
          marginBottom="2%"
          fontSize={"17px"}
        >
          {item.meta_data}
        </Text> */}
        <Text fontSize={"13px"} marginTop={"7%"} fontWeight="600">
          {item.author}
        </Text>
        {/* <Text fontSize={"13px"} marginTop={"1%"} fontWeight="600">
          CreatedAt:{item.createdAt}
        </Text> */}
        <Box
          marginTop={"4%"}
          width={"57%"}
          marginBottom="2%"
          border="1px solid black"
          backgroundColor={"gray"}
        ></Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
