import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlog,
  getAllBlogs,
  userAllBlogs,
} from "../Redux/AppReducer/action";
import {
  DELETE_BLOG_SUCCESS,
  GET_ALL_BLOGS_SUCCESS,
} from "../Redux/AppReducer/actionType";

const UserBlogCard = ({ item }) => {
  const userId = useSelector((state) => state.AuthReducer.user.user._id);
  const name = useSelector((state) => state.AuthReducer.user.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Delete Process starts here
  const handleDelete = (id) => {
    dispatch(deleteBlog(id)).then((res) => {
      console.log(res, "res");
      // here we need userid as well to fecth data or after deleting need to see the deleted data
      if (res === DELETE_BLOG_SUCCESS) {
        // get users's particular blog after deletion.
        dispatch(userAllBlogs(userId)).then((res) => {
          console.log(res, "res22");
          if (res === GET_ALL_BLOGS_SUCCESS) {
            // get all blogs after deletion.
            dispatch(getAllBlogs());
          }
        });

        navigate("/", { replace: true });
      }
    });
  };

  return (
    <Box
      width={{ base: "95%", lg: "95%" }}
      p={"10px"}
      margin={"auto"}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      borderRadius={"6px"}
      marginBottom={"9%"}
      marginTop={"2%"}
      fontWeight="400"
      textAlign={"justify"}
    >
      <Image
        borderRadius={"6px"}
        width="100%"
        height={"250px"}
        src={item.image}
        borderTopStartRadius={"8px"}
      ></Image>

      {/* icons */}
      <Flex
        alignItems={"center"}
        mx={"3%"}
        my={"2%"}
        mt={"4%"}
        justifyContent={"space-between"}
      >
        <Link to={`/edit/${item._id}`}>
          <EditIcon fontSize={"30px"} color={"blue"} />
        </Link>
        <DeleteIcon
          fontSize={"30px"}
          onClick={(e) => handleDelete(item._id)}
          color={"red"}
        />
      </Flex>

      {/*  category */}
      <Flex alignItems={"center"} m={"1.8%"} justifyContent={"space-between"}>
        <Text fontSize={"18px"} fontWeight={500}>
          Category:
        </Text>
        <Heading fontSize={"18px"}>{item.category}</Heading>
      </Flex>

      {/* Author */}
      <Flex alignItems={"center"} m={"1.8%"} justifyContent={"space-between"}>
        <Text fontSize={"18px"} fontWeight={500}>
          Author:
        </Text>
        <Heading fontSize={"18px"}>{name}</Heading>
      </Flex>

      <Flex>
        <Text fontWeight={500} m={"1%"}>
          Tiltle:
        </Text>
        <Text m={"1%"}>{item.title}</Text>
      </Flex>
    </Box>
  );
};

export default UserBlogCard;
