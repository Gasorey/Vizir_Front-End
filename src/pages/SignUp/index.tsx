import React, { useRef, useCallback } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import {
  Container, Content, Form, Background,
} from './styles';
import Input from '../../components/Input';
import SignUpFormData from '../../dtos/SignInFormDataDTO';
import api from '../../services/api';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        // formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/user', data);
        alert('Cadastro realizado com sucesso');
        history.push('/');
      } catch (err) {
        alert('Desculpe não foi possivel criar seu usuário');
        console.log(err);
      }
    }, [history],
  );

  return (
    <Container>
      <Content>
        <h1>Seja bem vindo a equipe Telzir</h1>
        <h2> faça seu cadastro para ter acesso como administrador</h2>
        <Form onSubmit={handleSubmit}>
          <Input name="name" type="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};
export default SignUp;
