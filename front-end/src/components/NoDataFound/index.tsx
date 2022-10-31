import styles from './styles.module.scss';

export default function NoDataFound() {
  return (
    <p className={styles.noDataFound}>Nenhum produto cadastrado.</p>
  );
}