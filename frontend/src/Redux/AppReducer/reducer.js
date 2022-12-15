import * as types from "./actionType";

const initialState = {
  allBlogs: [],
  detailBlog: {},
  userAllBlogs: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_BLOGS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        allBlogs: payload,
        isLoading: false,
      };
    case types.GET_ALL_BLOGS_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case types.GET_BLOG_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_BLOG_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detailBlog: payload,
      };
    case types.GET_BLOG_BY_ID_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case types.USER_ALL_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    case types.USER_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        userAllBlogs: payload,
        isLoading: false,
      };
    case types.USER_ALL_BLOGS_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
