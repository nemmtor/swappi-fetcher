import React from 'react';
import styles from './styles.module.scss';

interface Props {
  handleClick: () => void;
  text: string;
}

export const CallToAction: React.FC<Props> = ({ handleClick, text }) => {
  return (
    <button type="button" onClick={handleClick} className={styles.cta}>
      {text}
    </button>
  );
};
