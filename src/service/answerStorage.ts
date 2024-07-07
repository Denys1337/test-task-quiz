import { localStorageAnswerType } from "../components/checkboxQuestionMultipleType/MultiCheckboxAnswers";

const QUESTION_ANSWERS = 'quizAnswers';

export const getStoredData = (): localStorageAnswerType[] => {
  const storedData = localStorage.getItem(QUESTION_ANSWERS);
  return storedData ? JSON.parse(storedData) : [];
};

export const saveToLocalStorage = (key: string, data: localStorageAnswerType[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteStoredData = () => {
    localStorage.removeItem(QUESTION_ANSWERS);
    localStorage.setItem('currentStep', String(0));
};

export const pushStoredData = (dataResult: localStorageAnswerType) => {
  const storedData = getStoredData();
      storedData.push(dataResult);
      localStorage.setItem(QUESTION_ANSWERS, JSON.stringify(storedData));
}