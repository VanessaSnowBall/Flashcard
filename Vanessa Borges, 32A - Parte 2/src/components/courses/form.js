import React, { useState } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import api from "../../services/api"

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const registrar = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
        <Row>
            
            <Input placeholder="Curso" 
                label="Curso" 
                onChange={event => setName(event.target.value)} s={12} />
            <Input placeholder="Resumo" 
                label="Resumo" 
                onChange={event => setDescription(event.target.value)} s={12} />
            <Col s={12} m={12}>
                <NavLink to="/courses" ><Button onClick={registrar} waves='light' className="right grey darken-2">Enviar</Button></NavLink>
            </Col>
        </Row>
    );
}

export default Form;