import React from 'react'
import './styles.css';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="main-footer">
            <Container className="container">
                <Row className="row">
                    <Col>
                        <p style={{textAlign: 'center', paddingTop: '18px'}}>&copy;{new Date().getFullYear()} PERSONAL WEBSITE | All right reserved | 0885826680 | ivailo.tsolov1990@gmail.com </p>
                    </Col>               
                </Row>
            </Container>        
        </div>
    )
}

export default Footer;
