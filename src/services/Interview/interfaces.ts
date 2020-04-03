// answerIds - Currently not considered
export interface IInterviewModel {
  id: number;
  title: string;
  candidateName: string;
  templateId?: number;
  questionIds?: string[];
  categoryIds: string[];
  duration: number;
  dateTime: string;
  role: string;
  overallFeedback?: boolean;
}

export interface IInterviewState {
  isLoading: boolean;
  count: number;
  interviews: IInterviewModel[];
}
