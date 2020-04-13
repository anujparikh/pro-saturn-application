import React, { FC } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import ButtonPR, { ButtonPRPropTypes } from '../../components/ButtonPR';
import DisplayComponent from './containers/display-component';

const Dashboard: FC = () => {
  const buttonPRProps: ButtonPRPropTypes = {
    title: 'Add Template',
    buttonProps: { type: 'primary' },
    showBadge: false,
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Templates',
    headerExtra: <ButtonPR {...buttonPRProps}></ButtonPR>,
    displayComponent: <DisplayComponent></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default Dashboard;
