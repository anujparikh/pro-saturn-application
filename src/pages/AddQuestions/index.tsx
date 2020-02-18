import React, { FC } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import DisplayComponent from './components/DisplayComponent';

const AddQuestions: FC = () => {
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Add Questions',
    displayComponent: <DisplayComponent></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default AddQuestions;
