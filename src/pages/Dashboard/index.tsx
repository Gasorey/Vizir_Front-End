import React, { useState } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import ModalUserLogin from '../../components/ModalUserLogin';
import IUserDTO from '../../dtos/IUserDTO';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signIn } = useAuth();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  function toggleLoginModal():void{
    setLoginModalOpen(!loginModalOpen);
  }

  async function handleLogin(
    data: IUserDTO,
  ): Promise<void> {
    try {
      await signIn(data);
    } catch (err) {
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
    </Container>
  );
};

export default Dashboard;
