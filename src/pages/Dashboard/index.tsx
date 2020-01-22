import React from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import DashboardComponent from '../../components/Dashboard/Dashboard.component';
import { ButtonPRPropTypes } from '../../r-components/ButtonPR';
import ButtonPR from '../../r-components/ButtonPR';

const Dashboard: React.FC = () => {
  const buttonPRProps: ButtonPRPropTypes = {
    title: 'Pending Feedback',
    buttonProps: { shape: 'round' as 'round', size: 'small' as 'small' },
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Dashboard',
    headerExtra: <ButtonPR {...buttonPRProps}></ButtonPR>,
    displayComponent: <DashboardComponent></DashboardComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default Dashboard;
