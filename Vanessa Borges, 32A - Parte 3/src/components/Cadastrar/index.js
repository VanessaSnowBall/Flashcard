import { Container } from "./styles";

import Form from "../../components/courses";

const Cadastrar = () => {
  return (
    <Container>
      <h1 className="title">Adicionar um curso</h1>
      <Form />
    </Container>
  );
};

export default Cadastrar;
