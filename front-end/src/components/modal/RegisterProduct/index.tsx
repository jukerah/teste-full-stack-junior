import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss';
import { toast } from 'react-toastify';

import { setupAPIClient } from '../../../services/api';

import { Input } from '../../TextField';
import { Button } from '../../Button';
import Loading from '../../Loading';

interface RegisterProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
  refreshProducts: () => void;
}

export function ModalRegisterProduct({ isOpen, onRequestClose, refreshProducts }: RegisterProductProps) {
  const [ name, setName ] = useState<string>('');
  const [ price, setPrice ] = useState<number>(0);
  const [ amount, setAmount ] = useState<number>(0);
  const [ description, setDescription ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function registerProduct(event: FormEvent) {
    event.preventDefault();

    if (name === '' || isNaN(price) || isNaN(amount) || description === '') {
      toast.error('Preencha todos os campos!');
      return;
    }

    const apiClient = setupAPIClient();

    setIsLoading(true);

    await apiClient.post('/product', {
      name: name,
      price: price * 100,
      amount: amount,
      description: description
    })
    .then(() => {
      setIsLoading(false);
      clearForm();
      refreshProducts();
      toast.success('Produto cadastrado com sucesso!');
      onRequestClose();
    })
    .catch((error) => {
      toast.error('Erro ao cadastrar produto!');
      console.log(error);
    });

    setIsLoading(false);
  }

  function validatedForm() {
    if (name === '' || isNaN(price) || isNaN(amount) || description === '') {
      return true;
    }
    return false;
  };

  function clearForm() {
    setName('');
    setPrice(0);
    setAmount(0);
    setDescription('');
  }

  function handleCloseModal() {
    clearForm();
    onRequestClose();
  }
  
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0, 0.4)',
      backdropFilter: 'blur(10px)'
    },
    content: {
      width: '100%',
      maxWidth: '500px',
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: '50%',
      padding: '32px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#000021',
      border: 'none',
      borderRadius: '6px'
    }
  }
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <main className={styles.container}>
          <h1>Cadastrar Produto</h1>

          <form
            onSubmit={registerProduct}
            className={styles.form}
          >
            <Input
              type="text"
              label="Nome"
              placeholder="Digite o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="number"
              label="Preço"
              placeholder="Digite o preço"
              value={price}
              step="0.01"
              min={0}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />

            <Input
              type="number"
              label="Quantidade"
              placeholder="Digite a quantidade"
              value={amount}
              min={0}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />

            <Input
              type="text"
              label="Descrição"
              placeholder="Digite a descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className={styles.containerButton}>
              <Button
                type="button"
                backgroundColor="red-900"
                color="white"
                disabled={isLoading}
                onClick={handleCloseModal}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                backgroundColor="green-900"
                color="black"
                disabled={validatedForm()}
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </main>
      </Modal>

      {isLoading &&
        <Loading />
      }
    </>
  );
}