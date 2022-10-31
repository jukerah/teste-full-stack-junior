import { useState, FormEvent, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss';
import { toast } from 'react-toastify';

import { setupAPIClient } from '../../../services/api';

import { Input } from '../../TextField';
import { Button } from '../../Button';
import Loading from '../../Loading';

type ProductProps = {
  id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
}

interface UpdateProductProps {
  product: ProductProps;
  isOpen: boolean;
  onRequestClose: () => void;
  refreshProducts: () => void;
}

export function ModalUpdateProduct({ product, isOpen, onRequestClose, refreshProducts }: UpdateProductProps) {
  const [ name, setName ] = useState<string>(product.name);
  const [ price, setPrice ] = useState<number>(product.price / 100);
  const [ amount, setAmount ] = useState<number>(product.amount);
  const [ description, setDescription ] = useState<string>(product.description);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  
  async function removeProduct(event: FormEvent) {
    event.preventDefault();

    if (name === '' || isNaN(price) || isNaN(amount) || description === '') {
      toast.error('Preencha todos os campos!');
      return;
    }

    setIsLoading(true);

    const apiClient = setupAPIClient();

    await apiClient.put('/product', {
      id: product.id,
      name: name,
      price: price * 100,
      amount: amount,
      description: description
    })
    .then(() => {
      clearForm();
      refreshProducts();
      toast.success('Produto salvo com sucesso!');
      onRequestClose();
    })
    .catch(() => {
      toast.error('Erro ao salvar produto!');
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
          <h1>Alterar Produto</h1>

          <form
            onSubmit={removeProduct}
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
                Salvar
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