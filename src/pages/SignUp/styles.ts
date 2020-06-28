import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';
import signInImg from '../../assets/Telzir.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  h1{
    margin-bottom: 16px;
  }
`;

export const Form = styled(Unform)`
 margin-top: 32px;

 Button{
   transition: background-color 0.2s;

   &:hover{
     background: ${shade(0.2, '#242626')}
   }
 }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInImg}) no-repeat center;
  background-size: cover;
`;
