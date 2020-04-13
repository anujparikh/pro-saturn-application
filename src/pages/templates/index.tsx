import React, { FC } from 'react';
import Page from '../../containers/page';
import { PagePRPropTypes } from '../../containers/page';
import ButtonPR, { ButtonPRPropTypes } from '../../components/button-pr';
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
