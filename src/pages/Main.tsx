import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/quiz/Quiz';
import Loader from '../components/loader/Loader';
import { getStoredData, saveToLocalStorage } from '../service/answerStorage.ts';
import i18n from '../i18n/i18n';
import { localStorageAnswerType } from '../components/checkboxQuestionMultipleType/MultiCheckboxAnswers.tsx';
import { VariantAnswers } from '../types/types.ts';
import { determineLanguageFromAnswer } from '../utils/utils.ts';
import { useQuestions } from '../hooks/useQuestions.ts';

const Main: React.FC = () => {
  const questions = useQuestions();
  const [step, setStep] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const question = questions[step];

  useEffect(() => {
    const storedStep = localStorage.getItem('currentStep');
    if (storedStep) {
      setStep(parseInt(storedStep, 10));
    }
  }, []);

  const onClickVariant = (question: VariantAnswers) => {
    const findQuestion = questions.find((item) => item.id === question.questionId)!;
    const dataResult = {
      order: findQuestion?.id,
      title: findQuestion?.title,
      type: findQuestion?.type,
      answer: question.answers,
    };

    const storedData = getStoredData();
    const existingIndex = storedData.findIndex((item: localStorageAnswerType) => item.order === dataResult.order);

    if (existingIndex !== -1) {
      storedData[existingIndex] = dataResult;
    } else {
      storedData.push(dataResult);
    }

    saveToLocalStorage('quizAnswers', storedData);

    if (step + 1 === questions.length) {
      setIsQuizCompleted(true);
    } else {
      setStep(step + 1);
      localStorage.setItem('currentStep', String(step + 1));
    }
  };

  useEffect(() => {
    if (isQuizCompleted) {
      setShowLoader(true);

      const timer = setTimeout(() => {
        navigate('/email');
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      navigate(`/question/${step + 1}`);
    }
  }, [navigate, step, isQuizCompleted]);
  
   useEffect(() => {
    const storedData = getStoredData();
    if (storedData.length > 0) {
      const firstAnswer = storedData[0];
      if (firstAnswer && firstAnswer.order === 1) {
        const selectedLanguage = determineLanguageFromAnswer(firstAnswer.answer[0]);
        i18n.changeLanguage(selectedLanguage);
      }
    } else {
      i18n.changeLanguage('english');
    }
  }, [step]);

  return (
    <div>
      {showLoader && <Loader />}
      {!showLoader && step !== questions.length ? (
        <Quiz step={step} setStep={setStep} question={question} onClickVariant={onClickVariant} />
      ) : null}
    </div>
  );
};

export default Main;
