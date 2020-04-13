import React, { FC } from 'react';
import Page from '../../containers/page';
import { PagePRPropTypes } from '../../containers/page';
import { ButtonPRPropTypes } from '../../components/button-pr';
import ButtonPR from '../../components/button-pr';
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
