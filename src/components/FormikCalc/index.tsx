import React, { useState, useEffect } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { FaCalculator } from 'react-icons/fa';
import {
  Container, Input, Select, ResultContent, ResultWithPlan, ResultWithoutPlan,
} from './styles';
import api from '../../services/api';
import IPlan from '../../dtos/IPlan';
import IResult from '../../dtos/IResult';

const CalculatorComponent: React.FC = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  const [result, setResult] = useState<IResult>({} as IResult);

  useEffect(() => {
    async function loadPlans(): Promise<void> {
      await api.get('/plans').then((response) => (
        setPlans(response.data)
      ));
    }
    loadPlans();
  }, []);

  return (
    <Formik
      initialValues={{
        origin: '', destination: '', time: '', plan: '',
      }}

      onSubmit={(values) => {
        console.log(values);
        api.post('/calculator', values).then((response) => (

          setResult(response.data)
        ));
      }}
    >
      <Container>
        <Form>
          <h1>Calcule sua economia:</h1>
          <Input name="origin" type="text" placeholder="Origem" />
          <ErrorMessage name="Origem não existente" />
          <Input name="destination" type="text" placeholder="Destino" />
          <ErrorMessage name="Destino não existente" />
          <Input name="time" type="text" placeholder="Tempo estimado de uso" />
          <ErrorMessage name="email" />

          <Select name="plan" component="select" className="my-select">
            <option>Selecione seu plano</option>
            {plans.map((plan) => (
              <option>{plan.name}</option>
            ))}
          </Select>
          <button type="submit">
            <FaCalculator size={20} />
            Calcular
          </button>
        </Form>
        <ResultContent>
          <h1>Calcule sua conta:</h1>
          <h2>Com nosso plano:</h2>
          <ResultWithPlan>
            <h2>{result.valueWithPlan}</h2>
          </ResultWithPlan>
          <h2>Sem o nosso plano:</h2>
          <ResultWithoutPlan>
            <h2>{result.valueWithoutPlan}</h2>
          </ResultWithoutPlan>
        </ResultContent>
      </Container>
    </Formik>
  );
};

export default CalculatorComponent;
