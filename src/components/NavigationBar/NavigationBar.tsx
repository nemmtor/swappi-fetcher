import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';
import { removeUsernameAction, userSelector } from '../../stateManager/user';
import { CallToAction } from '../CallToAction';

export const NavigationBar: React.FC = () => {
  const { username } = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (): void => {
    dispatch(removeUsernameAction());
    history.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <span className={styles.navbar__title}>Swapi Fetcher 1.0</span>
      {username && (
        <>
          <span>Currently logged in as: {username}</span>
          <CallToAction text="Logout" handleClick={handleLogout} />
        </>
      )}
    </nav>
  );
};
