import React from 'react';
import Vertical from '../radioQuestionSingleType/Vertical';
import Horisontal from '../radioQuestionSingleType/Horisontal';
import { QuestionPropsType } from '../../types/types';

const RadioQuestion: React.FC<QuestionPropsType> = ({ onClickVariant, question }) => {

  return (
    <>
      {question.type === 'single-select'
        ? <Vertical onClickVariant={onClickVariant} question={question} />
        : <Horisontal onClickVariant={onClickVariant} question={question} />
      }
    </>
  )
}

export default RadioQuestion;