import { FETCH_ALL, CREATE_POST, FETCH_POST_DETAILS, UPDATE, DELETE } from '../../constants/actionTypes';
import * as api from '../../api';

export const getPosts = () => async(dispatch) => {
    
    try {
        const {data} = await api.fetchPosts();
        
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
};

export const fetchPost = (id) => async(dispatch) => {
    console.log(' this is the id' + id)
    try {
        const { data } = await api.fetchPost(id);
        console.log('data'+ data);

        dispatch({ type: FETCH_POST_DETAILS, payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);

        dispatch({type: CREATE_POST, payload: data})
    } catch (error) {
        console.log(error);
        
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };