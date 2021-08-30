import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deletePost} from '../../../../actions/posts/posts';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col,CardImg
} from 'reactstrap';

import './styles.css';

const Post = ({post,  setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  return (
      <Card className="single-card-body ">
        <CardBody>
          <CardTitle tag="h3" name="title">{post.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted" name="creator">Author: {post.name}</CardSubtitle>
          <CardText>{post.message}</CardText>
        </CardBody>
        <CardImg width="100%" src={post.selectedFile} alt="some thing" />
        <CardBody>
        <CardSubtitle tag="h6" className="mb-2 text-muted" name="createdAt">made on {moment(post.createdAt).fromNow()}</CardSubtitle>
          <CardText tag="h5">
              <Link to={`/postdetails/${post._id}`}>
                See More
              </Link>        
            </CardText>
          <Row>
            <Col className="action-post-buttons">
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              
                <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
                  Edit
                </Button>
                )}
            </Col>
            <Col className="action-post-buttons">
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))} > 
                Delete
              </Button>
            )}
            </Col>
          </Row>
        </CardBody>   
      </Card> 
    
  );
};

export default Post;