import React, {
  useRef, useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import {
  Container, ContentCreation, ContentData, Content,
} from './styles';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import ICreateCoverageDTO from '../../dtos/ICreateCoverageDTO';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ICreatePlanDTO from '../../dtos/ICreatePlanDTO';
import IPlans from '../../dtos/IPlans';
import CoverageTable from '../../components/CoverageTable';
import PlanTable from '../../components/PlanTable';

const Admin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();

  const handleCreateCoverage = useCallback(
    async (data: ICreateCoverageDTO) => {
      try {
        await api.post('/coverage', data);
        alert('Área de cobertura criada com sucesso!');
      } catch (err) {
        alert('Não foi possivel criar essa área de cobertura');
        console.log(err);
      }
    }, [],
  );

  const handleCreatePlan = useCallback(
    async (data: ICreatePlanDTO) => {
      try {
        await api.post('/plans', data);
        alert('Novo plano criado com sucesso!');
      } catch (err) {
        alert('Não foi possivel criar esse plano');
        console.log(err);
      }
    }, [],
  );

  return (

    <Container>
      <Header />
      <Content>
        <ContentCreation>
          <h1>Crie uma nova área de cobertura</h1>
          <Form onSubmit={handleCreateCoverage} ref={formRef}>
            <Input name="origin" placeholder="Origem" />
            <Input name="destination" placeholder="Destino" />
            <Input name="price" placeholder="Preço por minuto" />
            <Button type="submit">Criar Área de cobertura</Button>
          </Form>
          <h1>Crie um novo plano de ligações</h1>
          <Form onSubmit={handleCreatePlan} ref={formRef}>
            <Input name="name" placeholder="Nome do plano" />
            <Input name="minutes" placeholder="Minutos gratuitos" />
            <Button type="submit">Criar Área de cobertura</Button>
          </Form>
        </ContentCreation>
        <ContentData>
          <h1>Áreas de cobertura:</h1>
          <CoverageTable />
          <h1>Planos:</h1>
          <PlanTable />
        </ContentData>
      </Content>
    </Container>
  );
};

export default Admin;
