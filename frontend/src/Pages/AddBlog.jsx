import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
} from "@chakra-ui/react";

const AddBlog = () => {
  return (
    <Box
      m={"auto"}
      width={"45%"}
      border={"1px solid rgb(0,0,0,0.1)"}
      borderRadius={"7px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    //   backgroundColor={"rgb(61, 245, 202)"}
    >
      <FormControl py={"40px"} m={"auto"} width={"85%"}>
        <FormLabel mb={"-5px"}>Image</FormLabel>
        <Input mb={"15px"} variant="flushed" placeholder="Image Url" />
        <FormLabel mb={"-5px"}>Category</FormLabel>
        <Select mb={"15px"} variant="flushed" placeholder="Select category">
          <option>Technology</option>
          <option>Animals</option>
          <option>Food</option>
          <option>Entertainment</option>
          <option>Economy</option>
          <option>Other</option>
        </Select>
        <FormLabel mb={"-5px"}>Title</FormLabel>
        <Input mb={"15px"} variant="flushed" placeholder="Title" />

        <FormLabel mb={"-5px"}>Description</FormLabel>
        <Textarea mb={"15px"} variant="flushed" placeholder="Write your blog" />

        <FormLabel mb={"-5px"}>Time</FormLabel>
        <NumberInput mb={"15px"} variant="flushed" max={60} min={5}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel mb={"-5px"}>Author</FormLabel>
        <Input mb={"15px"} variant="flushed" placeholder="Author" />
      </FormControl>
    </Box>
  );
};

export default AddBlog;
