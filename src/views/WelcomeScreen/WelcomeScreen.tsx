import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CenterizeContainer, CallToAction } from '../../components';
import { setUsernameAction } from '../../stateManager';
import { userSelector } from '../../stateManager/user';

export const WelcomeScreen: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { username: usernameFromRedux } = useSelector(userSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.currentTarget.value);
  };

  const proceedToNextScreen = (): void => {
    if (usernameFromRedux) history.push('swapi-fetcher');

    if (!username) {
      setError('You didnt provide a username');
      return;
    }
    dispatch(setUsernameAction(username));
    history.push('/swapi-fetcher');
  };

  return (
    <CenterizeContainer isFullPage>
      <h1>Welcome to my Swapi Fetcher!</h1>
      {!usernameFromRedux && (
        <>
          <p>Please set your username and hit continue</p>
          <input type="text" placeholder="Name" onChange={handleChange} />
        </>
      )}
      {usernameFromRedux && <p>You are already logged in</p>}
      {error && <span style={{ color: 'tomato' }}>{error}</span>}
      <CallToAction text="Continue" handleClick={proceedToNextScreen} />
    </CenterizeContainer>
  );
};
