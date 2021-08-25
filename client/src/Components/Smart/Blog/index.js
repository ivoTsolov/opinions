import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getPosts } from '../../../actions/posts/posts';
import { LoadingData } from '../../Dumb/Loading/Loading';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const Blog = () => {

  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const authData = useSelector(state => state.authReducer.authData);

 useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

    return (
        <Container fluid>
            <h1>Opinions</h1>
            <Row>                  
                   {!posts.length ? <LoadingData/> : (            
                   <Col md="9"> 
                    <Row>
                        {posts.map((post)=> (
                            
                            <Col sm="12" md="3" key={post._id} style={{marginBottom: "10px"}} >
                            <Post post={post} setCurrentId={setCurrentId}  authData={authData}/>
                            </Col> 
                        ))}                        
                    </Row>
                    </Col> )}                                                           
                <Col sm="12" md="3">
                    {(authData !== null) ?
                        <PostForm currentId={currentId} setCurrentId={setCurrentId}/>  : 
                        <div>
                           <h1>Log In to create a post</h1> 
                           <p>Please dont be a lazy user, just because I am lazy developer
                               there is button in the navigation screen
                           </p>
                           <p>There are other bugs am working on, I will fix this one when I invent a story for it</p>
                        </div>
                    }
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Blog;
