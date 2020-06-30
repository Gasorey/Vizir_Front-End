import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: #111;
  border: 2px solid #111;

  display: flex;
  align-items: center;

  &+div{
    margin-top: 8px;
  }
  input{
    flex:1;
    background: transparent;
    border: 0;
    color: #111;
    font-weight: bold;
    font-size: 16px;

    &::placeholder{
      color:  #706e69;
    }
  }

  >svg{
    margin-right: 16px;
  }

`;
