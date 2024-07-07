import React, { useState } from 'react';
import CustomButton from '../customButton/CustomButton';
import { VariantsType } from '../quiz/Quiz';
import CheckboxForBubble from '../customCheckboxForBubble/CheckboxForBubble';
import styles from './checkboxQuestionMultipleType.module.scss';
import { useTranslation } from 'react-i18next';
import { AnswersPropsType } from '../../types/types';

const BubblesAnswers: React.FC<AnswersPropsType> = ({ onClickVariant, question }) => {
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);
   const { t } = useTranslation();

  const handleCheckboxChange = (text: string) => {
    if (selectedTexts.includes(text)) {
      const updatedTexts = selectedTexts.filter(t => t !== text);
      setSelectedTexts(updatedTexts);
    } else {
      if (selectedTexts.length < 3) {
        setSelectedTexts([...selectedTexts, text]);
      }
    }
  };

  const handleSubmit = () => {
    onClickVariant({answers:selectedTexts, questionId: question.id});
  };

  const variants = question.variants as VariantsType[];

  return (
    <>
      <ul className={styles.wrapperAnswerBubble}>
        {variants.map((item, i) => (
          <li key={i}>
            <CheckboxForBubble
              text={item.text}
              img={item.img}
              checked={selectedTexts.includes(item.text)}
              disabled={!selectedTexts.includes(item.text) && selectedTexts.length >= 3}
              onChange={() => handleCheckboxChange(item.text)}
            />
          </li>
        ))}
      </ul>
      <CustomButton handleSubmit={handleSubmit} title={t('Next')} validation={selectedTexts.length > 0} />
    </>
  );
};

export default BubblesAnswers;
