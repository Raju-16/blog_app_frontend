import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const BlogCard = ({ item }) => {
  const calculteDate = () => {
    let createdAt = item.createdAt;
    let newStr = "";
    for (var i = 0; i < 10; i++) {
      newStr += createdAt[i];
    }
    return newStr;
  };

  return (
    <Box
      height="450px"
      width={{ base: "280px", sm: "300", lg: "330px" }}
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      }
      borderRadius={"7px"}
      p={"4px"}
      backgroundColor={"gray.300"}
    >
      <Image
        borderRadius={"  7px 7px 0px 0px"}
        width={{ base: "100%", sm: "100%", lg: "100%" }}
        height={{ base: "50%", sm: "50%", md: "50%", lg: "50%" }}
        src={item.image}
      ></Image>

      <Box
        // width={{ base: "100%", sm: "50%", lg: "50%" }}
        border="1px solid transparent"
        backgroundColor={"white"}
        height={{ base: "50%", sm: "50%", md: "50%", lg: "50%" }}
        p={{ base: "2%", sm: "3%", lg: "4%" }}
        borderRadius={"0px 0px 7px 7px"}
      >
        <Box>
          <Heading fontSize={"24px"} fontFamily={"mono"} marginTop={"2%"}>
            {item.title}
          </Heading>
          <Box className="textBox">
            <Text className="blogCardDesc">{item.description}</Text>
          </Box>
        </Box>
        <Flex
          flexDirection={"column"}
          justifyItems={"center"}
          textAlign={"end"}
        >
          <Text
            m={"0px"}
            fontSize={"18px"}
            marginTop={"7%"}
            fontWeight="600"
            mb={"-20px"}
          >
            by: {item.author}
          </Text>

          <Text m={"0px"} fontSize={"18px"} marginTop={"7%"} fontWeight="600">
            {calculteDate()}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogCard;
