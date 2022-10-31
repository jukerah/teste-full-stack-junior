import styles from './styles.module.scss';

import { FaSpinner} from 'react-icons/fa';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <FaSpinner size={80} color="#FFD600" />
    </div>
  );
}