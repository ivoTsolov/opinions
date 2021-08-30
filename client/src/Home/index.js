import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import StaticHomeArticles from '../Components/Dumb/StaticHomeArticle/StaticHomeArticles';
import Chat from '../Components/Smart/Chat/Chat';

import './styles.css';

const Home = () => {
    return (
      <>
      <Container fluid className="main">
        <StaticHomeArticles/>
        <Row>
             <Col sm='12' md='12'>
               <Chat/>
             </Col >
        </Row>
      </Container>
      </>
    )
}

export default Home
