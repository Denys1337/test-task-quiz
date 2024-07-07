import React, { useState, useEffect } from 'react';
import CustomCheckbox from '../customChebox/CustomCheckbox';
import { StyledLi } from './MultiCheckboxAnswers.styled';
import CustomButton from '../customButton/CustomButton';
import { useTranslation } from 'react-i18next';
import { AnswersPropsType } from '../../types/types';

export type localStorageAnswerType = {
  order: number;
  title: string;
  type: string;
  answer: string[];
}

const MultiCheckboxAnswers: React.FC<AnswersPropsType> = ({ onClickVariant, question }) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(question.variants.length).fill(false));
  const { t } = useTranslation();

  useEffect(() => {
    const getStoredAnswer = (): string[] => {
      const storedData = localStorage.getItem('quizAnswers');
      if (storedData) {
        const parsedData: localStorageAnswerType[] = JSON.parse(storedData);
        const storedAnswer = parsedData.find((item) => item.order === question.id);
        return storedAnswer ? storedAnswer.answer : [];
      }
      return [];
    };

    const storedAnswer = getStoredAnswer();
    const variants = question.variants as string[];
    const initialCheckedItems = variants.map((variant) => storedAnswer.includes(variant));
    setCheckedItems(initialCheckedItems);
  }, [question.id, question.variants]);

  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prevItems) => {
      const newCheckedItems = [...prevItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  const handleSubmit = () => {
    const selectedVariants = question.variants
      .filter((_, index) => checkedItems[index])
      .map((item) => item) as string[];
    onClickVariant({ answers: selectedVariants, questionId: question.id });
  };

  return (
    <>
      <ul>
        {question.variants.map((item, i) => (
          <StyledLi key={i} checked={checkedItems[i]}>
            {item as string}
            <CustomCheckbox
              checked={checkedItems[i]}
              onChange={() => handleCheckboxChange(i)}
            />
          </StyledLi>
        ))}
      </ul>
      <CustomButton handleSubmit={handleSubmit} title={t('Next')} validation={checkedItems.some((isChecked) => isChecked)} />
    </>
  );
};

export default MultiCheckboxAnswers;
