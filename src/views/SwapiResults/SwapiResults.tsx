import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './styles.module.scss';
import { useSwapiFetch } from '../../hooks';
import { CenterizeContainer, CallToAction } from '../../components';

export const SwapiResults: React.FC = () => {
  const params = useParams<{ id: string | undefined }>();
  const history = useHistory();

  const { id } = params;

  const { isLoading, data, error } = useSwapiFetch(id);

  const tryAgain = (): void => {
    history.push('/swapi-fetcher');
  };

  const getRandomOne = (): void => {
    const min = 1;
    const max = 30;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    history.push(`/swapi-results/${randomId}`);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {error && (
        <CenterizeContainer>
          <div className={styles.error}>{error}</div>
        </CenterizeContainer>
      )}
      {!error && data && (
        <>
          <h1 className={styles.heading}>
            Here is your output for id: {id || 1}
          </h1>
          <div className={styles.output}>
            <div className={styles.output__fragment}>
              <h1 className={styles.output__name}>Name: {data.name}</h1>
            </div>

            <div className={styles.output__fragment}>
              <h2>Sizings:</h2>
              <span className="m-r-2">Height: {data.height}</span>
              <span>Mass: {data.mass}</span>
            </div>

            <div className={styles.output__fragment}>
              <h2>Colors:</h2>
              <span className="m-r-2">Hair color: {data.hair_color}</span>
              <span className="m-r-2">Skin color: {data.skin_color}</span>
              <span>Eye color: {data.eye_color}</span>
            </div>
          </div>
        </>
      )}
      <div className="m-b-1">
        <CallToAction text="Try again" handleClick={tryAgain} />
      </div>
      <CallToAction text="Fetch random one" handleClick={getRandomOne} />
    </div>
  );
};
