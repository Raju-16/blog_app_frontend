import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editBlog,
  getAllBlogs,
  userAllBlogs,
} from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import {
  EDIT_BLOG_SUCCESS,
  GET_ALL_BLOGS_SUCCESS,
  USER_ALL_BLOGS_SUCCESS,
} from "../Redux/AppReducer/actionType";

const EditBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [minRead, setMinRead] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  console.log(title, category, description, minRead, author, image);
  // this user needs because after post we will fetch all blogs and login user blog fectch
  const userID = useSelector((state) => state.AuthReducer.user.user._id);

  const handleOnEdit = () => {
    if (title && category && description && minRead && author && image && id) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("minRead", minRead);
      formData.append("author", author);
      formData.append("image", image);
      formData.append("userID", userID);

      dispatch(editBlog(id, formData)).then((res) => {
        console.log(res, "res here");
        if (res === EDIT_BLOG_SUCCESS) {
          dispatch(getAllBlogs()).then((res) => {
            if (res === GET_ALL_BLOGS_SUCCESS) {
              dispatch(userAllBlogs(userID)).then((res) => {
                if (res === USER_ALL_BLOGS_SUCCESS) {
                  navigate("/", { replace: true });
                }
              });
            }
          });
        }
      });
    }
  };

  return (
    <Box
      m={"auto"}
      width={{ base: "90%", sm: "90%", md: "70%", lg: "40%" }}
      border={"1px solid rgb(0,0,0,0.1)"}
      borderRadius={"7px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      //   backgroundColor={"rgb(61, 245, 202)"}
    >
      <FormControl py={"40px"} m={"auto"} width={"85%"}>
        <FormLabel mb={"-5px"}>Image</FormLabel>
        <Input
          type={"file"}
          onChange={(e) => setImage(e.target.files[0])}
          mb={"15px"}
          variant="flushed"
          placeholder="Image Url"
        />
        <FormLabel mb={"-5px"}>Category</FormLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          mb={"15px"}
          variant="flushed"
          placeholder="Select category"
        >
          <option>Food</option>
          <option>Movies</option>
          <option>Animal</option>
          <option>Technology</option>
          <option>Cricket</option>
          <option>Other</option>
        </Select>
        <FormLabel mb={"-5px"}>Title</FormLabel>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb={"15px"}
          variant="flushed"
          placeholder="Title"
        />

        <FormLabel mb={"-5px"}>Description</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={"15px"}
          variant="flushed"
          placeholder="Write your blog"
        />

        <FormLabel mb={"-5px"}>Time</FormLabel>
        <Input
          value={minRead}
          onChange={(e) => setMinRead(e.target.value)}
          mb={"15px"}
          variant="flushed"
        ></Input>

        <FormLabel mb={"-5px"}>Author</FormLabel>
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          mb={"15px"}
          variant="flushed"
          placeholder="Author"
        />

        <Button onClick={handleOnEdit}>Submit</Button>
      </FormControl>
    </Box>
  );
};

export default EditBlog;
