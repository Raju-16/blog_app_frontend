import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";

const Filter_Sort = () => {
  return (
    <Box>
      <Stack
        color={"white"}
        bg={"rgb(71, 93, 128)"}
        height={"100vh"}
        width={"20%"}
        pl={"25px"}
      >
        <VStack>
          <CheckboxGroup colorScheme="blue">
            <Spacer />
            <Spacer />
            <Spacer />
            <Heading width={"100%"} textAlign={"left"} size={"md"}>
              Filter by Choice
            </Heading>
            <Stack
              pl={"10px"}
              width={"100%"}
              spacing={[1, 5]}
              direction={["column"]}
            >
              <Checkbox value="tech">Technology</Checkbox>
              <Checkbox value="animals">Animals</Checkbox>
              <Checkbox value="food">Food</Checkbox>
              <Checkbox value="entertainment">Entertainment</Checkbox>
              <Checkbox value="eoconomy">Economy</Checkbox>
              <Checkbox value="other">Other</Checkbox>
            </Stack>
          </CheckboxGroup>
        </VStack>
        <br />
        <VStack width={"100%"}>
          <RadioGroup width={"100%"} defaultValue="2">
            <Spacer />
            <Spacer />
            <Heading width={"100%"} textAlign={"left"} mb={"10px"} size={"md"}>
              Sort by Title
            </Heading>
            <Stack pl={"10px"} spacing={[1, 5]} direction={["column"]}>
              <Radio colorScheme="blue" value="1">
                Acc
              </Radio>
              <Radio colorScheme="blue" value="-1">
                Dec
              </Radio>
            </Stack>
          </RadioGroup>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Filter_Sort;
