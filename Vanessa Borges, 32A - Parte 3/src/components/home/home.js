import React from "react";
import { Row, Col, Card } from 'react-materialize';
import Experience from '../experience/experience'
import logoA from '../../images/logoA.png';
import logoB from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={12} s={10}>
      <h5 className="subtitle">Você encontra no curso</h5>
      <Card>
        <div>
          <p><b>Destaques</b></p>
          <p>O curso de ensino médio, integrado ao técnico em informática do UNASP, proporciona aos alunos uma imersão e primeiro
          contato com o universo da tecnologia. Desde o primeiro ano, os alunos recebem os primeiros conhecimentos sobre programação,
          iniciando com as línguagens básicas, além de também, receberem instruções básicas que envolvem empreendedorismo, inovação e 
          contabilidade, para que assim possam se destacar no mercado e desenolver o interesse pelo cuidado financeiro.
          </p>
          <br/>
          <p><b>O corpo docente</b></p>
          <p>O UNASP, conta com um corpo de professores competentes, com amplo conhecimento e experiêcnias em suas áreas de ensino.
          Além disso, os coordenadores mostram interesse no desenvolvimento pessoal de cada aluno, promovendo eventos e palestras 
          que visam ampliar o conhecimento com palestras, além de expor os projetos realizados pelos estudantes do curso ao longo de
          sua jornada.
          </p>
        </div>
      </Card>
      <h5 className="subtitle">Universidade</h5>

        <Experience title="Nota do MEC"
          description="Como exemplo de proeficiência tem-se o exemplo do curso de direito da UNASP, que carrega consigo a nota máxima
          no MEC."
          avatar={avatar20}
        />
        <Experience title="A biblioteca virtual"
          description="Para auxiliar os alunos em seus estudos, o UNASP disponibiliza de uma biblioteca que possui seus exemplares
          disponíveis também de forma digital, para que se possa lê-los de onde quer que estejam."
          avatar={avatar20}                    
        /> 
    </Col>
  </Row>
);

export default Home;