import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const DetailCard = ({ item }) => {
  return (
    <Box
      width={{ base: "95%", md: "95%", lg: "95%", xl: "95%" }}
      textAlign={"justify"}
      maxH={"auto"}
      margin={"auto"}
      border={"blue.400"}
      marginBottom={"9%"}
      marginTop={"2%"}
    >
      <Box marginTop={"2%"}>
        <Image
          width={{ base: "80%", lg: "60%" }}
          height={"250px"}
          src={item.image}
          margin="auto"
        ></Image>
      </Box>

      <Box
        border={"1px solid transparent"}
        px={{ base: "1%", lg: "2%" }}
        pb={"15px"}
        mx={{ base: "10%", lg: "20%" }}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Text fontWeight={"700"} marginLeft={"1.9%"} marginTop={"1%"}>
          Blog
        </Text>
        <Heading
          marginLeft={"2%"}
          color={"green.600"}
          marginTop={"1%"}
          fontSize={"15px"}
        >
          {item.category}
        </Heading>
        <Text
          fontWeight={"400"}
          fontSize="18px"
          marginLeft={"2%"}
          fontFamily="serif"
          textAlign={"justify-all"}
        >
          {item.description}
        </Text>

        <Heading
          marginLeft={"70%"}
          marginTop={"1%"}
          color={"blue.400"}
          fontFamily={"cursive"}
          fontSize={"15px"}
        >
          Author:{item.author}
        </Heading>

        {/* <Heading
          marginLeft={"57%"}
          marginTop={"1%"}
          color={"green.600"}
          fontFamily={"cursive"}
          fontSize={"15px"}
        >
          CreatedAt:{item.createdAt}
        </Heading> */}
      </Box>
    </Box>
  );
};

export default DetailCard;
