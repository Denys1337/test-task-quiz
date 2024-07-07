import React, { useState } from 'react';
import styles from './Email.module.scss';
import CustomButton from '../../components/customButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Email = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) && email.length > 5;
  };

  const handleSubmit = () => {
    if (isValidEmail) {
      const dataResult = {
        order: 6,
        title: 'Email',
        type: 'email',
        answer: [email]
      };
      const storedData = JSON.parse(localStorage.getItem('quizAnswers') || '[]');
      storedData.push(dataResult);
      localStorage.setItem('quizAnswers', JSON.stringify(storedData));
      navigate('/result');
    } else {
      return;
    }
  };

  const validation = isValidEmail && email.length > 0;

  return (
    <div className={styles.main_content}>
      <div className={styles.wrapperEmail}>
        <h2>{t('Email')}</h2>
        <p>{t('descriptionForEmail')}</p>
        <div className={styles.wrapperEmail__inputEmail}>
          <input
            type='email'
            required
            placeholder={t('YourEmailPlaceholder')}
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? styles.errorInput : ''}
          />
          {!isValidEmail && <p className={styles.errorText}>{t('invalidEmail')}</p>}
        </div>
        <div className={styles.wrapperEmail__agree}>
          <p>
            {t('ByContinuingIAgreeWith')} <span>{t('Privacypolicy')}</span> {t('and')}
            <span> {t('TermsOfUse')}</span>
          </p>
        </div>
      </div>
      <CustomButton handleSubmit={handleSubmit} title={t('Next')} validation={validation}/>
    </div>
  );
};

export default Email;
