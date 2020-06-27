import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckCircle } from 'react-icons/fi';
import Modal from '../Modal';
import IUserDTO from '../../dtos/IUserDTO';
import { Form } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: ()=> void;
  handleLoginUser:(data: IUserDTO) => void;
}

const ModalUserLogin: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleLoginUser }) => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(
    async (data: IUserDTO) => {
      handleLoginUser(data);

      setIsOpen();
    },
    [],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Bem vindo administrador faça seu logon</h2>

        <input placeholder="e-mail" />
        <input placeholder="senha" />
        <button type="submit">
          <FiCheckCircle size={20} />
        </button>

      </Form>

    </Modal>
  );
};
export default ModalUserLogin;
