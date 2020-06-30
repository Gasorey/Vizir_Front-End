import React, { useState, useEffect } from 'react';
import {
  Formik, Form, ErrorMessage,
} from 'formik';
import { FaCalculator } from 'react-icons/fa';
import {
  Container, Input, Select, ResultContent, ResultWithPlan, ResultWithoutPlan,
} from './styles';
import api from '../../services/api';
import IPlan from '../../dtos/IPlan';
import IResult from '../../dtos/IResult';
import formatValue from '../../utils/FormatValue';

const CalculatorComponent: React.FC = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  const [result, setResult] = useState<IResult>({} as IResult);

  const [formatedWithPlan, setFormatedWithPlan] = useState<string>();
  const [formatedWithoutPlan, setFormatedWithoutPlan] = useState<string>();

  const formatedResultWithPlan = formatValue(result.valueWithPlan);
  const formatedResultWithoutPlan = formatValue(result.valueWithoutPlan);

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
        api.post<IResult>('/calculator', values).then((response) => {
          const { valueWithPlan } = response.data;
          const { valueWithoutPlan } = response.data;

          const formatWithPlan = formatValue(valueWithPlan);
          const formatWithoutPlan = formatValue(valueWithoutPlan);

          setFormatedWithPlan(formatWithPlan);
          setFormatedWithoutPlan(formatWithoutPlan);
        });
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
          <button
            type="submit"

          >
            <FaCalculator size={20} />
            Calcular
          </button>
        </Form>
        <ResultContent>
          <h1>Calcule sua conta:</h1>
          <h2>Com nosso plano:</h2>
          <ResultWithPlan>

            <h2>{formatedWithPlan}</h2>

          </ResultWithPlan>
          <h2>Sem o nosso plano:</h2>
          <ResultWithoutPlan>
            <h2>{formatedWithoutPlan}</h2>
          </ResultWithoutPlan>
        </ResultContent>
      </Container>
    </Formik>
  );
};

export default CalculatorComponent;
