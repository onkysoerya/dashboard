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
    marginTop:'88px',
    height:'38px',
    marginLeft:'-15px'
};
const btnB = {
    marginTop:'88px',
    height:'38px',
    marginRight:'10px'
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
        <Row>
            <Col md={2} xs={12} style={mainA}>
                <Button variant="primary">Tambah Berita</Button>
            </Col>
            <Col md={{offset:8}} style={btnB}>
                <DropdownButton id="dropdown-basic-button" title="Tipe Berita" variant="warning" style={{color:'white'}}>
                    <Dropdown.Item href="#/action-1">Lomba</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Balang</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
        <Row>
            <Col style={mainB}>
                <div style={cardNews}>
                    <div>
                        <Row>
                            <Col md={10} style={{backgroundColor:'black'}}>
                                <Image src="../Image/pk2.jpg" className="img"></Image>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={10} style={bgButton} className="bgButton"> 
                                <Row style={{padding:'0px'}}>
                                    <Col style={{marginTop:'10px',marginLeft:'30px'}}>
                                        <Button variant="primary" style={mbButton} >Edit</Button>
                                    </Col>
                                    <Col style={{marginTop:'12px'}}>
                                        <Button variant="danger" style={mbButton}>Hapus</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col style={mainB}>
                <div style={cardNews}>
                    <div>
                        <Row>
                            <Col md={10} style={{backgroundColor:'black'}}>
                                <Image src="../Image/pk2.jpg" className="img"></Image>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={10} style={bgButton} className="bgButton"> 
                                <Row style={{padding:'0px'}}>
                                    <Col style={{marginTop:'10px',marginLeft:'30px'}}>
                                        <Button variant="primary" style={mbButton} >Edit</Button>
                                    </Col>
                                    <Col style={{marginTop:'12px'}}>
                                        <Button variant="danger" style={mbButton}>Hapus</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col style={mainB}>
                <div style={cardNews}>
                    <div>
                        <Row>
                            <Col md={10} style={{backgroundColor:'black'}}>
                                <Image src="../Image/pk2.jpg" className="img"></Image>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={10} style={bgButton} className="bgButton"> 
                                <Row style={{padding:'0px'}}>
                                    <Col style={{marginTop:'10px',marginLeft:'30px'}}>
                                        <Button variant="primary" style={mbButton} >Edit</Button>
                                    </Col>
                                    <Col style={{marginTop:'12px'}}>
                                        <Button variant="danger" style={mbButton}>Hapus</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>    
        </Row>
        <Row style={{marginTop:'350px'}}>
            <Col style={mainB}>
                <div style={cardNews}>
                    <div>
                        <Row>
                            <Col md={10} style={{backgroundColor:'black'}}>
                                <Image src="../Image/pk2.jpg" className="img"></Image>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={10} style={bgButton} className="bgButton"> 
                                <Row style={{padding:'0px'}}>
                                    <Col style={{marginTop:'10px',marginLeft:'30px'}}>
                                        <Button variant="primary" style={mbButton} >Edit</Button>
                                    </Col>
                                    <Col style={{marginTop:'12px'}}>
                                        <Button variant="danger" style={mbButton}>Hapus</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col style={mainB}>
                <div style={cardNews}>
                    <div>
                        <Row>
                            <Col md={10} style={{backgroundColor:'black'}}>
                                <Image src="../Image/pk2.jpg" className="img"></Image>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={10} style={bgButton} className="bgButton"> 
                                <Row style={{padding:'0px'}}>
                                    <Col style={{marginTop:'10px',marginLeft:'30px'}}>
                                        <Button variant="primary" style={mbButton} >Edit</Button>
                                    </Col>
                                    <Col style={{marginTop:'12px'}}>
                                        <Button variant="danger" style={mbButton}>Hapus</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col style={mainB}>
                <div style={cardNews}>
                    <div>
                        <Row>
                            <Col md={10} style={{backgroundColor:'black'}}>
                                <Image src="../Image/pk2.jpg" className="img"></Image>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={10} style={bgButton} className="bgButton"> 
                                <Row style={{padding:'0px'}}>
                                    <Col style={{marginTop:'10px',marginLeft:'30px'}}>
                                        <Button variant="primary" style={mbButton} >Edit</Button>
                                    </Col>
                                    <Col style={{marginTop:'12px'}}>
                                        <Button variant="danger" style={mbButton}>Hapus</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>    
        </Row>
    </Container>
)
export default DashboardAdmin;
