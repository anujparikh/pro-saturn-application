import React, { FC } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import DisplayComponent from './components/DisplayComponent';
import ButtonPR, { ButtonPRPropTypes } from '../../components/ButtonPR';

const AddQuestions: FC = () => {
  const buttonPRProps: ButtonPRPropTypes = {
    title: 'Save Questions',
    buttonProps: { type: 'primary' },
    showBadge: false,
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Add Multiple Questions',
    headerExtra: <ButtonPR {...buttonPRProps}></ButtonPR>,
    displayComponent: <DisplayComponent></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default AddQuestions;
