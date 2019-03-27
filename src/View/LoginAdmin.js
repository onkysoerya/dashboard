import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';
import '../Component/style.css' 

export default class LoginAdmin extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col md={7} className="card-area-admin">
                    <div className="cardLeft">
                        <Image src="../Image/logobem4.png" className="img"></Image>
                    </div>
                </Col>
                <Col md={5} className="card-area-admin">
                    <div className="cardRight">
                    <Form className="formLogin">
                        <Container>
                            <Form.Row>
                                <Col md={2}></Col>
                                <Col md={8} className="loginNim">
                                <Form.Control placeholder="Nim" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col md={2}></Col>
                                <Col md={8} className="loginPassword">
                                    <Form.Control placeholder="Password" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col md={2}></Col>
                                <Col md={8} className="btnLogin">
                                    <Button variant="primary" type="submit" style={{width:'100%'}}>Login</Button>
                                </Col>
                            </Form.Row>
                        </Container>
                    </Form>               
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
