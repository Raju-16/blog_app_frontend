import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteUserBlog,
//   getAllBlogList,
//   getBlogByIdList,
//   getBlogsByUserList,
// } from "../Redux/AppReducer/action";
// import {
//   DELETE_USERBLOGLIST_SUCESS,
//   GET_USERBLOGLIST_SUCESS,
// } from "../Redux/AppReducer/actionType";

const UserBlogCard = ({ item }) => {
  const userconslerdata = useSelector((state) =>
    console.log(state.AuthReducer.user)
  );
  const userId = useSelector((state) => state.AuthReducer.user.user._id);
  const name = useSelector((state) => state.AuthReducer.user.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // do delete here.
  //   const handleDelete = (id) => {
  //     // console.log(id,"idd to")
  //     dispatch(deleteUserBlog(id)).then((res) => {
  //       console.log(res, "res");
  //       // here we need userid as well to fecth data or after deleting need to see the deleted data
  //       if (res === DELETE_USERBLOGLIST_SUCESS) {
  //         // get users's particular blog after deletion.
  //         dispatch(getBlogsByUserList(userId)).then((res) => {
  //           console.log(res, "res22");
  //           if (res === GET_USERBLOGLIST_SUCESS) {
  //             // get all blogs after deletion.
  //             dispatch(getAllBlogList());
  //           }
  //         });

  //         navigate("/", { replace: true });
  //       }
  //     });
  //   };

  return (
    <Box
      width={{ base: "95%", lg: "95%" }}
      p={"10px"}
      margin={"auto"}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      borderRadius={"1%"}
      marginBottom={"9%"}
      marginTop={"2%"}
      fontWeight="400"
      textAlign={"justify"}
    >
      <Image
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
        <Link to={`/editpage/${item._id}`}>
          <EditIcon fontSize={"30px"} color={"green.800"} />
        </Link>
        <DeleteIcon
          fontSize={"30px"}
          //   onClick={(e) => handleDelete(item._id)}
          color={"green.800"}
        />
      </Flex>

      {/*  category */}
      <Flex alignItems={"center"} m={"1.8%"} justifyContent={"space-between"}>
        <Text fontSize={"18px"} fontWeight={500}>
          Category:
        </Text>
        <Heading fontSize={"18px"} color={"green.600"}>
          {item.category}
        </Heading>
      </Flex>

      {/* Author */}
      <Flex alignItems={"center"} m={"1.8%"} justifyContent={"space-between"}>
        <Text fontSize={"18px"} fontWeight={500}>
          Author:
        </Text>
        <Heading fontSize={"18px"} color={"green.600"}>
          {name}
        </Heading>
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
