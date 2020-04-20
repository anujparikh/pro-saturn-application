export interface ITemplateModel {
  id: string;
  title: string;
  description: string;
  categories: string[];
  duration: number;
  roles: string[];
  questions: string[];
  interviews: string[];
}

export interface ITemplateState {
  isLoading: boolean;
  count: number;
  templates: ITemplateModel[];
}
