import React, { useState, useEffect, useCallback } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import IPlan from '../../dtos/IPlan';
import IResult from '../../dtos/IResult';

const CalculatorComponent: React.FC = () => {
  const x = '2';

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
  console.log(result);
  return (
    <Formik
      initialValues={{
        origin: '', destination: '', time: '', plan: '',
      }}

      onSubmit={(values) => {
        api.post('/calculator', values).then((response) => (

          setResult(response.data)
        ));
      }}
    >
      <Form>
        <label htmlFor="Origin">Origem</label>
        <Field name="origin" type="text" />
        <ErrorMessage name="Origin" />
        <label htmlFor="lastName">Destino</label>
        <Field name="destination" type="text" />
        <ErrorMessage name="Destination" />
        <label htmlFor="email">Tempo de uso</label>
        <Field name="time" type="text" />
        <ErrorMessage name="email" />

        <Field name="plan" as="select" className="my-select">
          {plans.map((plan) => (
            <option>{plan.name}</option>
          ))}
        </Field>

        <button type="submit">Calcular</button>

      </Form>
    </Formik>
  );
};

export default CalculatorComponent;
