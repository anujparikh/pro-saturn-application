import React, { FC, useState } from 'react';
import Page from '../../containers/Page';
import { PagePRPropTypes } from '../../containers/Page';
import { ButtonPRPropTypes } from '../../components/ButtonPR';
import ButtonPR from '../../components/ButtonPR';
import DisplayComponent from './containers/display-component';

const Questions: FC = () => {
  const [showModalFlag, setShowModalFlag] = useState(false);
  const displayComponentProps = { showModalFlag, setShowModalFlag };
  const addQuestionsProps: ButtonPRPropTypes = {
    title: 'Add Question',
    buttonProps: {
      type: 'primary',
      shape: 'round',
      onClick: () => {
        setShowModalFlag(true);
      },
    },
    showBadge: false,
  };
  const addCodeQuestionProps: ButtonPRPropTypes = {
    title: 'Add Code Question',
    buttonProps: { type: 'default', shape: 'round' },
    showBadge: false,
  };
  const pageProps: PagePRPropTypes = {
    headerTitle: 'Questions',
    headerExtra: (
      <>
        <ButtonPR {...addCodeQuestionProps}></ButtonPR>
        <ButtonPR {...addQuestionsProps}></ButtonPR>
      </>
    ),
    displayComponent: <DisplayComponent {...displayComponentProps}></DisplayComponent>,
  };
  return <Page {...pageProps}></Page>;
};

export default Questions;
