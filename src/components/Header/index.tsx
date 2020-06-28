import React from 'react';
import { FiUser, FiPower } from 'react-icons/fi';
import { Container } from './styles';
import logoImg from '../../assets/TelzirLogo.svg';
import { useAuth } from '../../hooks/AuthContext';

interface IHeaderProps{
 openLoginModal: ()=> void | undefined;
}

const Header: React.FC<IHeaderProps> = ({ openLoginModal }) => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
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
  }
  return (
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
            onClick={() => { signOut(); }}
          >
            <FiPower size={24} />
            <div className="AdminText">Logout</div>
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
