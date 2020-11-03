import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Contact(){
    return (
        <Container>
            <div className = "body">
                <Row>
                    <Col xs={12} md={8}>
                        <h4>Contact Me:</h4>
                        
                        <a href="https://www.linkedin.com/in/shattuckmichael" target="_blank">LinkedIn</a>
       

                        <p> <a href="https://github.com/mshattuck" target="_blank">GitHub</a></p>
          

                        <p>  <a href="mailto:mshattuck@fastmail.com" target="_blank"> mshattuck@fastmail.com</a></p>
           
                        <p>   <a href="" target="_blank">phone: 410-929-8808</a></p>
                 
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Contact;