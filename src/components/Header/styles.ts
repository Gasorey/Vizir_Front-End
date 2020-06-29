import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 30px 0;
  display: flex;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.logo {
      align-items: flex-start;
      flex-direction: column;
      margin-left:32px;
    }
    button{
      border: 0;
      background: transparent;
      align-items: center;
      justify-content:center;
    }
  }
  nav{
    display: flex;
    flex-direction: row;
  }
  div.LogoutButton{
   button{
    background: transparent;
    color: #111;
    border: 0;
    margin-right: 32px;
    transition: background-color 0.4s;

      &:hover{
        color: ${shade(0.4, '#f0f0f5')}
      }
   }
  }

  div.AdminButton{

    button{
      background: transparent;
      margin-right: 32px;
      border: 0;

      transition: background-color 0.4;

      &:hover{
        color: ${shade(0.4, '#f0f0f5')}
      }
    }
  }

`;
