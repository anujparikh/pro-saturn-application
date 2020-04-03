interface ITemplateInfo {
  count: number;
  text: string;
}

interface IContentData {
  title: string;
  contents: string[];
}

export interface ITemplateModel {
  id: number;
  title: string;
  templateInfo: ITemplateInfo[] | [];
  content: IContentData[] | [];
}

export interface ITemplateState {
  isLoading: boolean;
  count: number;
  templates: ITemplateModel[];
}
