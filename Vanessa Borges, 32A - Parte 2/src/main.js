// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Courses from "./components/courses/courses";
import Form from "./components/courses/form"
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Route, Routes } from 'react-router-dom';

const Main = (props) => (
    <Routes>
        <Route exact path='/' element={ <Home />}/>
        <Route path='/courses' element={ <Courses coursesData={props.coursesData}/>}/>
        <Route path='/formulario' element={ <Form /> }/>
    </Routes>
);

export default Main;