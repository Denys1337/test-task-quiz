import React from 'react';
import Checkmark from '../../images/checkmark.webp';
import Download from '../../images/download.webp';
import styles from './Result.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { downloadCSV } from '../../service/resultExportService';
import { deleteStoredData } from '../../service/answerStorage';

const Result: React.FC = () => {
  const navigate = useNavigate();
   const { t } = useTranslation();

  const handleRetakeQuiz = () => {
    deleteStoredData()
    navigate('/');
  };

  return (
    <div className={styles.main_content}>
      <div className={styles.result}>
        <h2>{t('ThankYou')}</h2>
        <p>{t('descriptionForThankYou')}</p>
        <img src={Checkmark} alt='' />
      </div>
      <div className={styles.wrapperButtons}>
        <button onClick={downloadCSV} className={styles.wrapperButtons__download}>
          <img src={Download} alt='' /> {t('DownloadMyAnswers')}
        </button>
        <button className={styles.wrapperButtons__backToStart} onClick={handleRetakeQuiz}>
          {t('RetakeQuiz')}
        </button>
      </div>
    </div>
  );
};

export default Result;
