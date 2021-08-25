import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deletePost} from '../../../../actions/posts/posts';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Post = ({post,  setCurrentId,  authData}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  return (
    <>  
      <Card>
        <CardBody>
          <CardTitle tag="h3" name="title">{post.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted" name="creator">Author: {post.name}</CardSubtitle>
          <CardText>{post.message}</CardText>
        </CardBody>
        <img width="100%" src={post.selectedFile} alt="some thing" />
        <CardBody>
        <CardSubtitle tag="h6" className="mb-2 text-muted" name="createdAt">made on {moment(post.createdAt).fromNow()}</CardSubtitle>
          <CardText tag="h5">
              <Link to={`/postdetails/${post._id}`}>
                See More
              </Link>        
            </CardText>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          
            <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
              Edit
            </Button>
      )}
            <CardText tag="h5">

            </CardText>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}> 
                Delete
              </Button>
            )}
            <CardText tag="h5">
                
            </CardText>
        </CardBody>   
      </Card> 
    </>
  );
};

export default Post;