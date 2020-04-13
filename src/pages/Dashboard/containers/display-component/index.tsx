import React, { FC } from 'react';
import TemplateCategory from '../../components/template-category';
import QuestionCategory from '../../components/question-category';
import ActionsCategory from '../../components/actions-category';
import './index.less';

const DisplayComponent: FC = () => {
  return (
    <div className="dashboard-content-container">
      <TemplateCategory
        title="Favorites templates"
        navigation={{ text: 'show more...' }}
      ></TemplateCategory>
      <QuestionCategory
        title="Top categories questions"
        navigation={{ text: 'show more...' }}
      ></QuestionCategory>
      <ActionsCategory></ActionsCategory>
    </div>
  );
};

export default DisplayComponent;
