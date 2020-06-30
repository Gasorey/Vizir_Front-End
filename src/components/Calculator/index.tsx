import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaCalculator } from 'react-icons/fa';
import { Container } from './styles';
import IPlan from '../../dtos/IPlan';
import api from '../../services/api';
import ICalculate from '../../dtos/ICalculate';
import IResult from '../../dtos/IResult';
import Input from '../Input';
import Button from '../Button';

const Calculator: React.FC = () => {
  const [result, setResult] = useState({} as IResult);

  const [plans, setPlans] = useState<IPlan[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadPlans(): Promise<void> {
      await api.get('/plans').then((response) => {
        const loadedPlans = response.data;

        setPlans(loadedPlans);
      });
    }
    loadPlans();
  }, []);

  const handleSubmit = useCallback(async (data:ICalculate) => {
    try {
      await api.post('/calculator', data).then((response) => {
        const myResult = response.data;

        setResult(myResult);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="origin" placeholder="Origem" />
        <Input name="destination" placeholder="Destino" />
        <Input name="time" placeholder="Tempo de uso" />
        <Button type="submit">
          <FaCalculator size={20} />
          Calcular
        </Button>
      </Form>
    </Container>
  );
};

export default Calculator;
