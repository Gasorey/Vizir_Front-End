import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #3bba1c;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #111;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 20px;

  &:hover{
    background: ${shade(0.2, '#3bba1c')}
  }
`;
