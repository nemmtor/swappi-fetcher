import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  isFullPage?: boolean;
  hasColumnLayout?: boolean;
  children: ReactNode;
}

export const CenterizeContainer: React.FC<Props> = ({
  isFullPage = false,
  hasColumnLayout = true,
  children,
}) => {
  return (
    <div
      className={`${styles.container} ${
        isFullPage ? styles['container--full'] : ''
      }
      ${hasColumnLayout ? styles['container--column'] : ''}
      `}
    >
      {children}
    </div>
  );
};
