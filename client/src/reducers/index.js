
import { combineReducers } from 'redux';
import posts from './posts/postsReducer';
import postDetails from './posts/postDetails';
import authReducer from './auth/auth';

export default combineReducers({ 
posts,
postDetails,
authReducer, 
});