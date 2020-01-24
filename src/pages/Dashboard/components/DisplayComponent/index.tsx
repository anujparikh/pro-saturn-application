import React from 'react';
import TemplateCategory from '../../../../containers/TemplateCategory';
import QuestionCategory from '../../../../containers/QuestionCategory';
import ActionsCategory from '../../../../containers/ActionsCategory';
import './index.less';

const DisplayComponent: React.FC = () => {
  return (
    <div className="dashboard-content-div">
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
