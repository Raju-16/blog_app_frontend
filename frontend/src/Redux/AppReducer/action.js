import * as types from "./actionType";
import axios from "axios";

// with this action you can get all the blog list of website.
export const getAllBlogs = (params) => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOGS_REQUEST });
  return axios
    .get("https://lime-strange-boa.cyclic.app/blog")
    .then((res) =>
      dispatch({ type: types.GET_ALL_BLOGS_SUCCESS, payload: res.data.blogs })
    )
    .catch((err) => dispatch({ type: types.GET_ALL_BLOGS_FAILURE }));
};

// with this action you can get blog with the help of ID.
export const getBlogById = (id) => (dispatch) => {
  dispatch({ type: types.GET_BLOG_BY_ID_REQUEST });
  return axios
    .get(`https://lime-strange-boa.cyclic.app/blog/${id}`)
    .then((res) => {
      dispatch({ type: types.GET_BLOG_BY_ID_SUCCESS, payload: res.data.blog });
      return types.GET_BLOG_BY_ID_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_BLOG_BY_ID_FAILURE });
      return types.GET_BLOG_BY_ID_FAILURE;
    });
};

// with this action you can get all the blogs of a perticular user.
export const userAllBlogs = (id) => (dispatch) => {
  dispatch({ type: types.USER_ALL_BLOGS_REQUEST });
  return axios
    .get(`https://lime-strange-boa.cyclic.app/user/${id}`)
    .then((res) => {
      dispatch({
        type: types.USER_ALL_BLOGS_SUCCESS,
        payload: res.data.userBlogs.allBlogs,
      });
      return types.USER_ALL_BLOGS_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.USER_ALL_BLOGS_FAILURE });
      return types.USER_ALL_BLOGS_FAILURE;
    });
};
