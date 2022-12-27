import * as types from "./actionType";
import axios from "axios";

// with this action you can get all the blog list of website.
export const getAllBlogs = (params) => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOGS_REQUEST });
  return axios
    .get(`https://chartreuse-green-badger-coat.cyclic.app/blog`, { params })
    .then((res) => {
      dispatch({ type: types.GET_ALL_BLOGS_SUCCESS, payload: res.data.blogs });
      return types.GET_ALL_BLOGS_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_ALL_BLOGS_FAILURE });
      return types.GET_ALL_BLOGS_FAILURE;
    });
};

// with this action you can get blog with the help of ID.
export const getBlogById = (id) => (dispatch) => {
  dispatch({ type: types.GET_BLOG_BY_ID_REQUEST });
  return axios
    .get(`https://chartreuse-green-badger-coat.cyclic.app/blog/${id}`)
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
    .get(`https://chartreuse-green-badger-coat.cyclic.app/user/${id}`)
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

export const deleteBlog = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_BLOG_REQUEST });
  return axios
    .delete(`https://chartreuse-green-badger-coat.cyclic.app/blog/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_BLOG_SUCCESS });
      return types.DELETE_BLOG_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_BLOG_FAILURE });
      return types.DELETE_BLOG_FAILURE;
    });
};

export const editBlog = (id, formData) => (dispatch) => {
  dispatch({ type: types.EDIT_BLOG_REQUEST });
  return axios
    .patch(`https://chartreuse-green-badger-coat.cyclic.app/blog/${id}`, formData)
    .then((res) => {
      dispatch({ type: types.EDIT_BLOG_SUCCESS });
      return types.EDIT_BLOG_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.EDIT_BLOG_FAILURE });
      return types.EDIT_BLOG_FAILURE;
    });
};

export const addBlog = (formData) => (dispatch) => {
  dispatch({ type: types.ADD_BLOG_REQUEST });
  return axios
    .post("https://chartreuse-green-badger-coat.cyclic.app/blog", formData)
    .then((res) => {
      dispatch({ type: types.ADD_BLOG_SUCCESS });
      return types.ADD_BLOG_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_BLOG_FAILURE });
      return types.ADD_BLOG_FAILURE;
    });
};
