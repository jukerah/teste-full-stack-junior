import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { setupAPIClient } from '../services/api';

import { Button } from '../components/Button';
import NoDataFound from '../components/NoDataFound';
import Loading from '../components/Loading';
import { ModalRegisterProduct } from '../components/modal/RegisterProduct';
import { ModalRemoveProduct } from '../components/modal/RemoveProduct';
import { ModalUpdateProduct } from '../components/modal/UpdateProduct';

export type ProductProps = {
  id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
}

interface HomeProps {
  productList: ProductProps[];
}

export default function Home({ productList }: HomeProps ) {
  const [ products, setProducts ] = useState<ProductProps[]>(productList || []);
  const [ modalRegisterProductIsOpen, setModalRegisterProductIsOpen ] = useState<boolean>(false);
  const [ modalRemoveProductIsOpen, setModalRemoveProductIsOpen ] = useState<boolean>(false);
  const [ modalUpdateProductIsOpen, setModalUpdateProductIsOpen ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  
  const [ productId, setProductId ] = useState<string>('');
  const [ product, setProduct ] = useState<ProductProps | null>(null);

  function handleCloseModal() {
    setModalRegisterProductIsOpen(false);
    setModalRemoveProductIsOpen(false);
    setModalUpdateProductIsOpen(false);
    setProduct(null);
    setProductId('');
  }
  
  async function refreshProducts() {
    setIsLoading(true);

    const apiClient = setupAPIClient();
    const productList = await apiClient.get('/product');

    setProducts(productList.data);
    setIsLoading(false);
  };

  function handleRemoveProduct(id: string) {
    setProductId(id);
    setModalRemoveProductIsOpen(true);
  };

  function handleUpdateProduct({ id, name, price, amount, description }: ProductProps) {
    setProduct({id, name, price, amount, description});
    setTimeout(() => {
      setModalUpdateProductIsOpen(true);
    }, 100);
  };

  Modal.setAppElement('#__next');

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Lista de Produtos</title>
          <meta name="description" content="Este projeto é um teste baseado em CRUD de produtos." />
        </Head>

        <div className={styles.containerCenter}>
          <header className={styles.header}>
            <h1>Lista de produtos</h1>

            <Button
              type="button"
              backgroundColor="green-900"
              color="black"
              onClick={() => setModalRegisterProductIsOpen(true)}
            >
              Novo produto
            </Button>
          </header>

          <article className={styles.cards}>
            {(products.length > 0) ? (
              products.map(({ id, name, price, amount, description}) => (
                <section key={id} className={styles.card}>
                  <div  className={styles.cardHeader}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p><span>Estoque:</span> {amount} un.</p>
                  </div>
                  <div className={styles.cardAction}>
                    <p>R$ {(price / 100).toFixed(2)}</p>
                    <div>
                      <button onClick={()=> handleUpdateProduct({ id, name, price, amount, description })}>
                        <FaEdit size={32} color="#FFD600" />
                      </button>
                      <button onClick={() => handleRemoveProduct(id)}>
                        <FaTrashAlt size={30} color="#FF3F4A" />
                      </button>
                    </div>
                  </div>
                </section>
              )
            )) : (
              <NoDataFound />
            )}
          </article>
        </div>
      </div>
      
      {isLoading &&
        <Loading />
      }

      <ModalRegisterProduct
        isOpen={modalRegisterProductIsOpen}
        onRequestClose={handleCloseModal}
        refreshProducts={refreshProducts}
      />

      <ModalRemoveProduct
        id={productId}
        isOpen={modalRemoveProductIsOpen}
        onRequestClose={handleCloseModal}
        refreshProducts={refreshProducts}
      />
      
      {product &&
        <ModalUpdateProduct
          product={product}
          isOpen={modalUpdateProductIsOpen}
          onRequestClose={handleCloseModal}
          refreshProducts={refreshProducts}
        />
      }
    </>
  );
}

export const getServerSideProps = (async () => {
  const apiClient = setupAPIClient();

  const productList = await apiClient.get('/product');
  
  return {
    props: {
      productList: productList.data
    }
  }
})