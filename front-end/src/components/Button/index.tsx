import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  backgroundColor: string;
  color: string;
}

export function Button({ children, backgroundColor, color,  ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      {...rest}
      style={{
        backgroundColor: `var(--${backgroundColor})`,
        color: `var(--${color})`,
      }}
    >
      <a
        className={styles.buttonText}
        style={{ color: `var(--${color})` }}
      >
        {children}
      </a>
    </button>
  );
}