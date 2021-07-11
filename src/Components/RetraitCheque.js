import React from 'react'
import Intervenant from "./Intervenant"
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './detail';
 import { Button, Card, } from "react-bootstrap";
 import "./Component.css"
function RetraitCheque() {
    return (
     <div>
     <Card>     
        <Card.Body>
        <Card.Title>Retrait Chèque</Card.Title>            
            <Detail/>
            <Intervenant/>
        </Card.Body>
      </Card>
      <Button variant="success" id="btnValider">Valider</Button>
      <Button variant="danger" id="btnAnnuler">Annuler</Button>
      </div>
    )
}

export default RetraitCheque
