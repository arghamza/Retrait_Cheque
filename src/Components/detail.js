import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Button, Col, Form, Card} from "react-bootstrap";
function Detail() {
    return (
        <Row>
            <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title>Détails</Card.Title>
                            <Form>
                                 <Form.Group >
                                     <Row>
                                    <Col xs="2"><Form.Label>Montant:</Form.Label></Col>
                                    <Col xs="5"><Form.Control type="number" /></Col>
                                    </Row>
                                 </Form.Group>
                                    <br/>
                                 <Form.Group>
                                    <Row>
                                    <Col xs="2">
                                    <Form.Label>N° Chéque:</Form.Label></Col>
                                    <Col xs="5">
                                    <Form.Control type="Text"/></Col>
                                    <Col><Button variant="dark">Numériser</Button></Col>
                                    </Row>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                 <Row> 
                                    <Col xs="2"><Form.Label>Type d'opération:</Form.Label></Col>
                                 <Col xs="5">
                                    <Form.Control type="Text" placeholder="Retrait Chéque"/>
                                </Col>
                                <Col xs="1">
                                    <Form.Label>RIB:</Form.Label></Col>
                                <Col> <Form.Control type="Text" style={{ width: '100%' }}/>
                                </Col>
                                </Row>  
                                </Form.Group>
                                <br/>
                                 <Form.Group>
                                    <Row>
                                    <Col xs="2">
                                    <Form.Label>Motif:</Form.Label></Col>
                                    <Col>
                                    <Form.Control type="Text" /></Col>
                                    </Row>
                                </Form.Group> 
                            </Form>
                        </Card.Body>  
                    </Card>        
            </Col>  
            <Col xs="5">
            <Card >
                <Card.Body>
                    <Card.Title>Image Chéque</Card.Title>
                    <img src="Carré_blanc.jpg" alt="" style={{height:"10%"}}/>
                </Card.Body>
            </Card>
            </Col>              
        </Row>
    )
}

export default Detail
