import React, { useState, useEffect } from 'react';

import { Table, Container } from './styles';
import api from '../../services/api';
import IPlan from '../../dtos/IPlan';

const PlanTable: React.FC = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  useEffect(() => {
    async function loadPlans(): Promise<void> {
      await api.get('/plans').then((response) => {
        const loadedPlans = response.data;

        setPlans(loadedPlans);
      });
    }
    loadPlans();
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <th>Nome do plano</th>
          <th>Minutos disponíveis</th>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.name}</td>
              <td>{plan.minutes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

  );
};

export default PlanTable;
