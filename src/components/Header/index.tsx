import React from 'react';
import {
  FiUser, FiPower,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';
import logoImg from '../../assets/TelzirLogo.svg';
import { useAuth } from '../../hooks/AuthContext';

interface IHeaderProps{
 openLoginModal?: ()=> void | undefined;
}

const Header: React.FC<IHeaderProps> = ({ openLoginModal }) => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  if (!user && openLoginModal) {
    return (
      <Container>
        <header>
          <button type="button">
            <Link to="/">

              <div className="logo">
                <img src={logoImg} alt="telzir" />
              </div>
            </Link>
          </button>
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
        <button type="button">
          <Link to="/">

            <div className="logo">
              <img src={logoImg} alt="telzir" />
            </div>
          </Link>
        </button>
      </header>
      <nav>

        <div className="LogoutButton">
          <button
            type="button"
            onClick={() => { handleSignOut(); }}
          >
            <FiPower size={24} />
            <div className="LogoutText">Logout</div>
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
