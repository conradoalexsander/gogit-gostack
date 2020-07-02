import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';



const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github </Title>
    <Form>
      <input placeholder="Digite aqui"></input>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/53683786?s=460&u=9a806b10abd688deee28c7a5dfd9e7e59cccf2ff&v=4"
          alt="Conrado Alexsander" />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Melhor que nós temos</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/53683786?s=460&u=9a806b10abd688deee28c7a5dfd9e7e59cccf2ff&v=4"
          alt="Conrado Alexsander" />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Melhor que nós temos</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/53683786?s=460&u=9a806b10abd688deee28c7a5dfd9e7e59cccf2ff&v=4"
          alt="Conrado Alexsander" />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Melhor que nós temos</p>
        </div>

        <FiChevronRight size={20} />
      </a>

    </Repositories>
  </>

)

export default Dashboard;
