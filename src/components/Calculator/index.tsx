import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaCalculator } from 'react-icons/fa';
import { Container } from './styles';
import ICoverage from '../../dtos/ICoverage';
import IPlan from '../../dtos/IPlan';
import api from '../../services/api';
import ICalculate from '../../dtos/ICalculate';
import IResult from '../../dtos/IResult';
import Input from '../Input';
import Button from '../Button';
// import Select from '../Select';
import ReactSelect from '../ReactSelect';

interface IPlanName {
  name: string;
}

const Calculator: React.FC = () => {
  const [coverages, setCoverages] = useState<ICoverage[]>([]);

  const [result, setResult] = useState({} as IResult);

  const [plans, setPlans] = useState<IPlan[]>([]);

  const [plansName, setPlansName] = useState<IPlanName[]>([]);

  const formRef = useRef<FormHandles>(null);

  const selectRef = useRef(null);

  useEffect(() => {
    async function loadPlans(): Promise<void> {
      await api.get('/plans').then((response) => {
        const loadedPlans = response.data;

        setPlans(loadedPlans);
      });
    }
    loadPlans();
  }, []);

  useEffect(() => {
    async function loadCoverage(): Promise<void> {
      await api.get('coverage').then((response) => {
        const loadedCoverages = response.data;

        setCoverages(loadedCoverages);
      });
    }
    loadCoverage();
  }, []);
  const [plan, setPlan] = useState('');

  const handleSubmit = useCallback(async (data:ICalculate) => {
    try {
      const newData = { ...data, plan };
      await api.post('/calculator', newData).then((response) => {
        const myResult = response.data;

        setResult(myResult);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    console.log(event.target.value);
    setPlan(event.target.value as string);
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="origin" placeholder="Origem" />
        <Input name="destination" placeholder="Destino" />

        {/* <Select plans={plans} onChange={handleChange} value={plan} /> */}

        <ReactSelect name="plan" />

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
