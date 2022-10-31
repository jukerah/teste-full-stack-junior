import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss';
import { toast } from 'react-toastify';

import { setupAPIClient } from '../../../services/api';

import { Button } from '../../Button';
import Loading from '../../Loading';

interface RemoveProductProps {
  id: string;
  isOpen: boolean;
  onRequestClose: () => void;
  refreshProducts: () => void;
}

export function ModalRemoveProduct({ id, isOpen, onRequestClose, refreshProducts }: RemoveProductProps) {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function removeProduct() {
    const apiClient = setupAPIClient();

    onRequestClose();
    setIsLoading(true);

    await apiClient.delete('/product', {
      data: {
        id: id
      }
    })
    .then(() => {
      refreshProducts();
      toast.success('Produto deletado com sucesso!');
    })
    .catch(() => {
      toast.error('Erro ao deletar produto!');
    });

    setIsLoading(false);
  };
  
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
          <p>Deseja excluir o produto?</p>

          <div className={styles.containerButton}>
            <Button
              type="button"
              backgroundColor="red-900"
              color="white"
              disabled={isLoading}
              onClick={onRequestClose}
            >
              Não
            </Button>

            <Button
              type="submit"
              backgroundColor="green-900"
              color="black"
              onClick={removeProduct}
            >
              Sim
            </Button>
          </div>
        </main>
      </Modal>

      {isLoading &&
        <Loading />
      }
    </>
  );
}