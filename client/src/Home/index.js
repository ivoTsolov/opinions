import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import StaticHomeArticles from '../Components/Dumb/StaticHomeArticle/StaticHomeArticles';

import './styles.css';

const Home = () => {
    return (
      <>
      <Container fluid className="main">
        <StaticHomeArticles/>
        <Row>
             <Col sm='12' md='6'>
             <h4>Chat Room</h4>
             </Col >
             <Col sm='12' md='2'>
             <h4>Online</h4>
             </Col>
             <Col sm='12' md='4'>
             <h4>Contact Form</h4>
             </Col>
        </Row>
      </Container>
      </>
    )
}

export default Home
