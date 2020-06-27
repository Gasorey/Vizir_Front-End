import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`

h2{
  margin-bottom: 24px;
}


Button{
  width: 56px;
  background: green;
  transition: 0.2s;

  &:hover{
    background: ${shade(0.2, 'green')}
  }
}
`;
