import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 import {Tabs, Tab, Row,  Col, Form, Card} from "react-bootstrap";
function Intervenant() {
    return (
        <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Intervenant</Card.Title>
                 <Row>
                     <Col>
                         <Tabs defaultActiveKey="Titulaire" 
                               id="controlled-tab-example">
                             <Tab eventKey="Titulaire" title="Titulaire">
                                <br/>
                             <Form>
                             <Form.Group>
                            <Row> 
                             
                             <Col xs="1"><Form.Label>Piéce d'identité:</Form.Label></Col>
                             <Col xs="5">
                             <Form.Control as="select"  >
                                 <option>CARTE D'IDENTITE</option>
                                 <option>PASSPORT</option>
                                 <option>EXEMPLE1</option>
                                 <option>EXEMPLE2</option>
                                 <option>EXEMPLE3</option>
                             </Form.Control>
                             </Col>
                             <Col xs="1">
                             <Form.Label>N° P.I:</Form.Label></Col>
                                   <Col> <Form.Control type="Text"/>
                            </Col>
                            </Row>  
                             </Form.Group>
                             <br/>
                             <Form.Group>
                            <Row> 
                             <Col xs="1"><Form.Label>Nom:</Form.Label></Col>
                             <Col xs="5">
                                <Form.Control type="Text" style={{ width: '100%' }}/>
                             </Col>
                             <Col xs="1">
                             <Form.Label>Prénom:</Form.Label></Col>
                                   <Col> <Form.Control type="Text" style={{ width: '100%' }}/>
                            </Col>
                            </Row>  
                             </Form.Group> 
                             <br/>
                             <Form.Group>
                                 <Row>
                             <Col xs="1">
                             <Form.Label>Adresse:</Form.Label></Col>
                                   <Col > <Form.Control type="Text" style={{ width: '100%' }}/>
                            </Col></Row>
                                 </Form.Group>   
                            </Form>

                             </Tab>
                             <Tab eventKey="Tiers" title="Tiers">
                             <form>
                                 last name<br/>
                                     <input type="text"></input>
                                 </form>
                             </Tab>
                             <Tab eventKey="Mandataire" title="Mandataire" >
                             <form>
                                     <input type="text"></input>
                                 </form>
                             </Tab>
                         </Tabs>
                     </Col>
                 </Row>
        </Card.Body>
      </Card>
    )
}

export default Intervenant
