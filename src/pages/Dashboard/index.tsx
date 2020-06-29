import React, { useState } from 'react';
import {
  Container, Content, ContentImg, ContentImgText, TableContent, CoverageContent, PlansContent, CalculatorContent,
} from './styles';
import Header from '../../components/Header';
import ModalUserLogin from '../../components/ModalUserLogin';
import IUserDTO from '../../dtos/IUserDTO';
import { useAuth } from '../../hooks/AuthContext';
import CoverageTable from '../../components/CoverageTable';
import PlanTable from '../../components/PlanTable';
import FalaMaisLogo from '../../assets/TelzirFaleMais1.svg';
import Input from '../../components/Input';
import Calculator from '../../components/Calculator';

const Dashboard: React.FC = () => {
  const { signIn } = useAuth();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  function toggleLoginModal():void{
    setLoginModalOpen(!loginModalOpen);
  }

  async function handleLogin(
    { email, password }: IUserDTO,
  ): Promise<void> {
    try {
      await signIn({
        email,
        password,
      });
      setLoginModalOpen(false);
    } catch (err) {
      alert('E-mail ou senha incorretos');
      console.log(err);
    }
  }

  return (
    <Container>
      <Header openLoginModal={toggleLoginModal} />
      <ModalUserLogin
        isOpen={loginModalOpen}
        setIsOpen={toggleLoginModal}
        handleLoginUser={handleLogin}
      />
      <Content>
        <ContentImg>
          <img src={FalaMaisLogo} alt="fale mais" />
        </ContentImg>
        <ContentImgText>
          <p>Nós da Telzir gostariamos de apresenta-los nosso mais novo produto, o
            <strong> Telzir Fale Mais </strong>
            com ele você consegue fazer ligações a distância por um preço muito
            mais baixo do que o cobrado normalmente
          </p>
        </ContentImgText>
        <TableContent>
          <CoverageContent>
            <h2>Nossa área de cobertura:</h2>
            {/* <CoverageTable /> */}
          </CoverageContent>
          <PlansContent>
            <h2>Nosso planos:</h2>
            {/* <PlanTable /> */}
          </PlansContent>
        </TableContent>
        <CalculatorContent>

          <Calculator />
        </CalculatorContent>

      </Content>
    </Container>
  );
};

export default Dashboard;
