import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userSelector } from '../../stateManager/user';
import { NavigationBar } from '../NavigationBar';

interface Props {
  title: string;
  View: React.FC;
  isProtected?: boolean;
}

export const Page: React.FC<Props> = ({ title, View, isProtected = false }) => {
  const { username } = useSelector(userSelector);
  const history = useHistory();

  useEffect(() => {
    if (isProtected && !username) {
      history.push('/');
    }
  }, [history, isProtected, username]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container">
        <NavigationBar />
        <View />
      </div>
    </>
  );
};
