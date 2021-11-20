import { Container } from "./styles";

import { useParams } from "react-router-dom";

import Form from "../../components/courses";

function editar () {
  const { id } = useParams();

  return (
    <Container>
      <h1 className="title">Editar um curso</h1>
      <Form editar id={id} />
    </Container>
  );
}

export default editar;
