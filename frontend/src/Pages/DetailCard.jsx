import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const DetailCard = ({ item }) => {
  const calculateDate = () => {
    let createdAt = item.createdAt;
    let newStr = "";
    for (var i = 0; i < 10; i++) {
      newStr += createdAt[i];
    }
    return newStr;
  };

  return (
    <Box
      m={"auto"}
      p={"10px"}
      backgroundColor={"gray.100"}
      borderRadius={"6px"}
      mt={{ base: "1%", sm: "1%", md: "2%", lg: "3%" }}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
      width={"90%"}
    >
      <Flex display={{ base: "block", sm: "block", md: "flex", lg: "flex" }}>
        <Box width={{ base: "100%", sm: "100%", md: "40%", lg: "40%" }}>
          <Image
            height={"350px"}
            src={item.image}
            borderRadius={{ sm: "6px", md: "6px 0px 0px 6px" }}
          />
        </Box>
        <Box
          height={{ base: "400px", sm: "400px", md: "auto", lg: "auto" }}
          width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
        >
          <Heading my={"10px"} marginTop={"1%"} fontSize={"20px"}>
            {item.title}
          </Heading>
          <Text
            textAlign={"justify"}
            height={"auto"}
            mx={"20px"}
            marginTop={"1%"}
            fontSize={"16px"}
          >
            {item.description}
          </Text>
          <Box position={"absolute"} right={"6%"} bottom={"2%"}>
            <Text height={"auto"} fontSize={"15px"}>
              by : {item.author}
            </Text>
            <Text height={"auto"} fontSize={"15px"}>
              {item.category}
            </Text>
            <Text height={"auto"} fontSize={"15px"}>
              Read Time : {item.minRead}
            </Text>
            <Text height={"auto"} fontSize={"15px"}>
              createdAt : {calculateDate(item.createdAt)}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DetailCard;
