import React, { useState } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import ModalUserLogin from '../../components/ModalUserLogin';
import IUserDTO from '../../dtos/IUserDTO';
import { useAuth } from '../../hooks/AuthContext';
import CoverageTable from '../../components/CoverageTable';
import PlanTable from '../../components/PlanTable';

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
      <CoverageTable />
      <PlanTable />
    </Container>
  );
};

export default Dashboard;
