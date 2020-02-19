import React, { FC } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import { ButtonPRPropTypes } from '../../components/ButtonPR';
import ButtonPR from '../../components/ButtonPR';
import DisplayComponent from './components/DisplayComponent';

const Questions: FC = () => {
  const buttonPRProps: ButtonPRPropTypes = {
    title: 'Add Questions',
    buttonProps: { type: 'primary' },
    showBadge: false,
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Questions',
    headerExtra: <ButtonPR {...buttonPRProps}></ButtonPR>,
    displayComponent: <DisplayComponent></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default Questions;
