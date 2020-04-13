import React, { FC } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import { ButtonPRPropTypes } from '../../components/ButtonPR';
import ButtonPR from '../../components/ButtonPR';
import DisplayComponent from './containers/display-component';

const Dashboard: FC = () => {
  const buttonPRProps: ButtonPRPropTypes = {
    title: 'Pending Feedback',
    buttonProps: { shape: 'round' as 'round', size: 'small' as 'small' },
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Dashboard',
    headerExtra: <ButtonPR {...buttonPRProps}></ButtonPR>,
    displayComponent: <DisplayComponent></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default Dashboard;
