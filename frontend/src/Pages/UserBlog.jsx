import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { userAllBlogs } from "../Redux/AppReducer/action";
import UserBlogCard from "./UserBlogCard";

const UserBlog = () => {
  const userId = useSelector((state) => state.AuthReducer.user.user._id);
  const name = useSelector((state) => state.AuthReducer.user.user.name);
  const userBlogs = useSelector((state) => state.AppReducer.userAllBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(userAllBlogs(userId));
    }
  }, [userId, dispatch]);

  return (
    <Box>
      <Box marginTop={"2%"}>
        <Heading textAlign={"center"}>Publish By {name}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          marginTop={"2%"}
          gap={"2%"}
          marginLeft={{ base: "1%", sm: "1%", md: "0.3%" }}
        >
          {userBlogs.length > 0 &&
            userBlogs.map((item) => {
              return <UserBlogCard item={item} key={item._id} />;
            })}
        </Grid>
      </Box>
    </Box>
  );
};
export default UserBlog;
