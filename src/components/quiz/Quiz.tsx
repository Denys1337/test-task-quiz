import React, { Dispatch, SetStateAction } from 'react';
import RadioQuestion from '../questions/singleQuestionWrapper.tsx';
import styles from './Quiz.module.scss';
import Multiple from '../questions/mulipleQuestionWrapper.tsx';
import { VariantAnswers } from '../../types/types.ts';
import { useQuestions } from '../../hooks/useQuestions.ts';

export type VariantsType = {
  img: string;
  text: string;
}

export type IQuestion = {
  id: number;
  title: string;
  description: string | null;
  variants: string[] | Array<VariantsType>;
  type: string;
};

export type QuizPropsType = {
  step: number;
  question: IQuestion;
  onClickVariant: (index: VariantAnswers) => void;
  setStep: Dispatch<SetStateAction<number>>;
};

const Quiz: React.FC<QuizPropsType> = ({ step, setStep, question, onClickVariant }) => {
  const questions = useQuestions();
  const percentage = Math.round(((step + 1) / (questions.length + 1)) * 100);

  const onClickBack = () => {
    setStep(prevState => prevState - 1);
    localStorage.setItem('currentStep', String(step - 1));
  };

  return (
    <>
      <div className={styles.wrapperHeader}>
        {(step === 0) ? (<div className={styles.wrapperHeader__arrowLeftNone}></div>) : (<div className={styles.wrapperHeader__arrowLeft} onClick={onClickBack}></div>) }
        <div className={styles.wrapperHeader__countQuestions}>
          <p className={styles.wrapperHeader__countQuestions__carrentStep}>{step + 1}</p>
          <p>/</p>
          <p>{questions.length}</p>
          </div>
        <div></div>
      </div>
      <div className={styles.progress}>
        <div style={{ width: `${percentage}%` }} className={styles.progress__inner}></div>
      </div>
      <h1>{question.title}</h1>
      <p className={styles.description}>{question.description}</p>
      {
        (question.type === 'single-select' || question.type === 'single-select-image')
          ? <RadioQuestion onClickVariant={onClickVariant} question={question} />
          : <Multiple onClickVariant={onClickVariant} question={question}/>
      }
    </>
  )
}

export default Quiz;