import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';
import '../Component/style.css'
// import { Container, Row, Col } from 'react-bootstrap';
const mainA = {
    height:'38px',
};
const btnB = {
    height:'38px',
};
const mainB = {
    height:'100px',
    marginTop:'60px',
    marginLeft:'0px'
}
const cardNews = {
    color:'white'
}
const bgButton = {
    position:'absolute',
    top:'390px',
    backgroundColor:'white',
    height:'60px',
    padding:'0px'
}
const mbButton = {
    height:'40px',
    width:'100px'
}
const buttonFilter = {
    
}
const DashboardAdmin = () => (
    <Container>
        <Row style={{marginTop:'40px'}}>
            <Col md={2} style={mainA}>
                <a href="#/tambahberita"><Button variant="primary">Tambah Berita</Button></a>
            </Col>
            <Col md={8}></Col>
            <Col md={2} style={btnB}>
                <DropdownButton id="dropdown-basic-button" title="Tipe Berita" variant="warning">
                    <Dropdown.Item href="#/action-1">Lomba</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Balang</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
        <Row>
            <Col md={4} className="cardArea">
                <div className="cardBody">
                    <div className="cardImage">
                        <Image src="../Image/pk2.jpg" className="img"></Image>
                    </div>
                    <div className="cardButton">
                        <Row style={{padding:'10px'}}>
                            <Col md={2} xs={2} className={mbButton}></Col>
                            <Col md={4} xs={4}className={mbButton}>
                                <Button variant="primary" style={mbButton}>Edit</Button>
                            </Col>
                            <Col md={4} xs={4} className={mbButton}>
                                <Button variant="danger" style={mbButton}>Hapus</Button>
                            </Col>
                            <Col md={2} xs={2} className={mbButton}></Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col md={4} className="cardArea">
                <div className="cardBody">
                    <div className="cardImage">
                        <Image src="../Image/pk2.jpg" className="img"></Image>
                    </div>
                    <div className="cardButton">
                        <Row style={{padding:'10px'}}>
                            <Col md={2} xs={2} className={mbButton}></Col>
                            <Col md={4} xs={4}className={mbButton}>
                                <Button variant="primary" style={mbButton}>Edit</Button>
                            </Col>
                            <Col md={4} xs={4} className={mbButton}>
                                <Button variant="danger" style={mbButton}>Hapus</Button>
                            </Col>
                            <Col md={2} xs={2} className={mbButton}></Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col md={4} className="cardArea">
                <div className="cardBody">
                    <div className="cardImage">
                        <Image src="../Image/pk2.jpg" className="img"></Image>
                    </div>
                    <div className="cardButton">
                        <Row style={{padding:'10px'}}>
                            <Col md={2} xs={2} className={mbButton}></Col>
                            <Col md={4} xs={4}className={mbButton}>
                                <Button variant="primary" style={mbButton}>Edit</Button>
                            </Col>
                            <Col md={4} xs={4} className={mbButton}>
                                <Button variant="danger" style={mbButton}>Hapus</Button>
                            </Col>
                            <Col md={2} xs={2} className={mbButton}></Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={4} className="cardArea">
                <div className="cardBody">
                    <div className="cardImage">
                        <Image src="../Image/pk2.jpg" className="img"></Image>
                    </div>
                    <div className="cardButton">
                        <Row style={{padding:'10px'}}>
                            <Col md={2} xs={2} className={mbButton}></Col>
                            <Col md={4} xs={4}className={mbButton}>
                                <Button variant="primary" style={mbButton}>Edit</Button>
                            </Col>
                            <Col md={4} xs={4} className={mbButton}>
                                <Button variant="danger" style={mbButton}>Hapus</Button>
                            </Col>
                            <Col md={2} xs={2} className={mbButton}></Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col md={4} className="cardArea">
                <div className="cardBody">
                    <div className="cardImage">
                        <Image src="../Image/pk2.jpg" className="img"></Image>
                    </div>
                    <div className="cardButton">
                        <Row style={{padding:'10px'}}>
                            <Col md={2} xs={2} className={mbButton}></Col>
                            <Col md={4} xs={4}className={mbButton}>
                                <Button variant="primary" style={mbButton}>Edit</Button>
                            </Col>
                            <Col md={4} xs={4} className={mbButton}>
                                <Button variant="danger" style={mbButton}>Hapus</Button>
                            </Col>
                            <Col md={2} xs={2} className={mbButton}></Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col md={4} className="cardArea">
                <div className="cardBody">
                    <div className="cardImage">
                        <Image src="../Image/pk2.jpg" className="img"></Image>
                    </div>
                    <div className="cardButton">
                        <Row style={{padding:'10px'}}>
                            <Col md={2} xs={2} className={mbButton}></Col>
                            <Col md={4} xs={4}className={mbButton}>
                                <Button variant="primary" style={mbButton}>Edit</Button>
                            </Col>
                            <Col md={4} xs={4} className={mbButton}>
                                <Button variant="danger" style={mbButton}>Hapus</Button>
                            </Col>
                            <Col md={2} xs={2} className={mbButton}></Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)
export default DashboardAdmin;
