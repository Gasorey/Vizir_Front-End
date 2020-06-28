import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`

input{
  background: #fff;
}

h2{
  margin-bottom: 24px;
}


Button{
  width: 56px;
  background: #3bba1c;
  transition: 0.2s;


  &:hover{
    background: ${shade(0.2, '#3bba1c')}
  }
}
`;
