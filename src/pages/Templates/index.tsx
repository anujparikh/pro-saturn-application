import React, { FC } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import { ButtonPRPropTypes } from '../../components/ButtonPR';
import ButtonPR from '../../components/ButtonPR';
import DisplayComponent from './components/DisplayComponent';

const Dashboard: FC = () => {
  const buttonPRProps: ButtonPRPropTypes = {
    title: 'Add template',
    buttonProps: { size: 'small' as 'small' },
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Templates',
    headerExtra: <ButtonPR {...buttonPRProps}></ButtonPR>,
    displayComponent: <DisplayComponent></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default Dashboard;
