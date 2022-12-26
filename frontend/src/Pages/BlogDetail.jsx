import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogById } from "../Redux/AppReducer/action";
import DetailCard from "./DetailCard";

const BlogDetail = () => {
  const { id } = useParams();
  const targetedBlog = useSelector((state) => state.AppReducer.detailBlog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getBlogById(id));
    }
  }, [id, dispatch]);

  return (
    <Box>
      <Box width="100%" border=" blue.400">
        <DetailCard item={targetedBlog} />
      </Box>
    </Box>
  );
};

export default BlogDetail;
