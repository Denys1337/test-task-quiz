import React from 'react';
import styles from './radioQuestionSingleType.module.scss';
import { VariantsType } from '../quiz/Quiz';
import { QuestionPropsType } from '../../types/types';



const Horisontal: React.FC<QuestionPropsType> = ({ onClickVariant, question }) => {
  
  const horisontalAnswers = question.variants as VariantsType[];
  return (
    <ul className={styles.horisontal}>
      {horisontalAnswers.map((item, i) => (
        <li className={styles.horisontal__item} onClick={() => onClickVariant({answers:[item.text], questionId: question.id})} key={item.text}>
          <h2>{item.img}</h2>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default Horisontal;