import { IQuestion } from "../components/quiz/Quiz";

export type VariantAnswers = {
  answers: string[];
  questionId: number;
};

export type AnswersPropsType = {
  question: IQuestion;
  onClickVariant: (selectedTexts: VariantAnswers) => void;
};

export type QuestionPropsType = {
  question: IQuestion;
  onClickVariant: (index: VariantAnswers) => void;
}

export type QuizAnswer = {
  order: number;
  title: string;
  type: string;
  answer: string[];
};