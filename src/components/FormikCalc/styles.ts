import styled from 'styled-components';
import { Field } from 'formik';

import { shade } from 'polished';

export const Container = styled.div`
display: flex;
flex-direction: row;


Form{
  display: flex;
  flex-direction: column;
  button{
  border-radius: 10px;
  width: 100%;
  margin-top: 8px;
  padding: 16px 16px;
  font-weight: bold;
  background: #3bba1c;
  transition: 0.2s;


  &:hover{
    background: ${shade(0.2, '#3bba1c')}
  }

  svg{
    margin-right: 8px;
  }
}

}
`;
export const Input = styled(Field)`

  background-color: #fff;
  border: 2px solid #111;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  padding: 16px 16px;
  border-radius: 10px;
`;
export const Select = styled(Field)`

  background-color: #fff;
  border: 2px solid #111;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  padding: 16px 16px;

  border-radius: 10px;
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 56px;
  h2{
    margin-top: 16px;
  }
`;

export const ResultWithPlan = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  margin-top: 24px;
  background: #fff;
  border: 2px solid #111;

  h2{
    margin: auto auto;
  }
`;

export const ResultWithoutPlan = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  margin-top: 24px;
  background: #fff;
  border: 2px solid #111;
  h2{
    margin: auto auto;
  }


`;
