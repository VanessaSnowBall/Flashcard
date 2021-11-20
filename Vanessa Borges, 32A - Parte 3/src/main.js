import React from "react";
import Home from "./components/home/home";
import Courses from "./components/courses/courses";
import Form from "./components/courses/form"
import { Route, Routes } from 'react-router-dom';

const Main = (props) => (
    <Routes>
        <Route exact path='/' element={ <Home />}/>
        <Route path='/courses' element={ <Courses coursesData={props.coursesData}/>}/>
        <Route path='/formulario' element={ <Form /> }/>
    </Routes>
);

export default Main;