import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Container } from './styles';
import logoImg from '../../assets/TelzirLogo.svg';

interface IHeaderProps{
 openLoginModal: ()=> void | undefined;
}

const Header: React.FC<IHeaderProps> = ({ openLoginModal }) => (
  <Container>
    <header>
      <div className="logo">
        <img src={logoImg} alt="telzir" />
      </div>
    </header>
    <nav>
      <div className="AdminButton">
        <button
          type="button"
          onClick={() => {
            openLoginModal();
          }}
        >
          <FiUser size={24} />
          <div className="AdminText">Admin</div>
        </button>
      </div>
    </nav>
  </Container>
);

export default Header;
