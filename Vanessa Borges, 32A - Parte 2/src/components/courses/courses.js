import React from "react";
import {NavLink} from 'react-router-dom'
import Curso from "./curso"


const Courses = (props) => {
    return (
        <div>
            <div class="rowc">
                <h5>Cursos</h5>
                <NavLink to="/formulario"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>
            </div>
            {props.coursesData.map(course => (
              <Curso 
                title={course.nome}
                descReveal={course.descReveal} />
            ))};
        </div>
    );
};

export default Courses;