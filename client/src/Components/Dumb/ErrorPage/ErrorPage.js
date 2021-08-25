import React from 'react'
import { Container, Col } from 'reactstrap'
import './styles.css';

const ErrorPage = () => {
    return (
        <Container fluid style={{marginTop: '15%'}}> 
        <Col>
                <h1 alignt="center" id="errorHeaderOne" className="align-middle">There is no such page...</h1>
        </Col>     
        </Container>
    )
}

export default ErrorPage
