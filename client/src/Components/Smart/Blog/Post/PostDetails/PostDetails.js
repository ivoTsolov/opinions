import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router';
import { fetchPost } from '../../../../../actions/posts/posts';
import moment from 'moment';

const PostDetails = () => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.postDetails);
    const {id} = useParams();
  

    useEffect(() => {
        const newId = id;
        console.log(newId);
        dispatch(fetchPost(id));
      }, [dispatch, id]);

    return (
        <Container style={{marginTop:"15px", marginBottom: "15px"}}>
            <Row>
                <Col sm="12" md="5">
                    <h1>{details.title}</h1>
                         
                    <img src={details.selectedFile} width="80%" alt={details.title}/>
                
                </Col>
                <Col sm="12" md="5">
                    <p>{details.message}</p>  
                    <p>Creator: {details.name}</p>   
                    <p>Date: {moment(details.createdAt).fromNow()}</p> 
                </Col>
                <Col sm="12" md="2">
                    <p>Comments</p>
                    <p>Comments</p>
                </Col>
            </Row>          
        </Container>
    )
}

export default PostDetails
