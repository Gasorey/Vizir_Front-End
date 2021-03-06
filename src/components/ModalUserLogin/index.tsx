import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import {
  FiCheckCircle, FiMail, FiLock,
} from 'react-icons/fi';
import Modal from '../Modal';
import IUserDTO from '../../dtos/IUserDTO';
import { Form } from './styles';
import Button from '../Button';
import Input from '../Input';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: ()=> void;
  handleLoginUser:(data: IUserDTO) => void;
}

const ModalUserLogin: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleLoginUser }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IUserDTO) => {
      handleLoginUser(data);

      setIsOpen();
    },
    [handleLoginUser, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Bem vindo administrador, faça seu logon</h2>

        <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />
        <Input type="password" name="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">
          <FiCheckCircle size={20} />
        </Button>

      </Form>

    </Modal>
  );
};
export default ModalUserLogin;
