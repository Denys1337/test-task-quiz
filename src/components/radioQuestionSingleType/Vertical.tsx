import React from 'react';
import styles from './radioQuestionSingleType.module.scss';
import { QuestionPropsType } from '../../types/types';

const Vertical: React.FC<QuestionPropsType> = ({ onClickVariant, question }) => {
  
  const variantsVertical = question.variants as string [];
  return (
    <ul>
      { variantsVertical.map((item, i) => (
        <li className={styles.ItemSingleAnswer} onClick={() => onClickVariant({ answers: [item], questionId: question.id})} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Vertical;