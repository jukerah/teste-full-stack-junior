import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return(
    <label className={styles.label}>
      {label}
      <input className={styles.textField} {...rest} />
    </label>
  );
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  label: string;
}

export function TextArea({ label, ...rest }: TextAreaProps) {
  return(
    <label className={styles.label}>
      {label}
      <textarea className={styles.textArea} {...rest}></textarea>
    </label>
  );
}