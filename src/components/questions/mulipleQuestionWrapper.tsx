import React from 'react';
import BubblesAnswers from '../checkboxQuestionMultipleType/BubblesAnswers';
import MultiCheckboxAnswers from '../checkboxQuestionMultipleType/MultiCheckboxAnswers';
import { QuestionPropsType } from '../../types/types';

const Multiple: React.FC<QuestionPropsType> = ({ onClickVariant, question }) => {
    
  return (
    <>
      {question.type === 'bubble'
      ? <BubblesAnswers onClickVariant={onClickVariant} question={question} />
      : <MultiCheckboxAnswers onClickVariant={onClickVariant} question={question} />
      }
    </>
  )
}

export default Multiple;