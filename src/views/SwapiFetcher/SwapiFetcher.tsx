import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { CenterizeContainer, CallToAction } from '../../components';
import styles from './styles.module.scss';

export const SwapiFetcher: React.FC = () => {
  const [id, setId] = useState<string>();
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setId(e.currentTarget.value);
  };

  const proceedToNextScreen = (): void => {
    if (!id) return history.push('/swapi-results');
    return history.push(`swapi-results/${id}`);
  };

  return (
    <CenterizeContainer isFullPage>
      <input
        type="text"
        onChange={handleChange}
        className={styles.input}
        placeholder="1"
      />
      <CallToAction
        text="Fetch api and display results"
        handleClick={proceedToNextScreen}
      />
    </CenterizeContainer>
  );
};
