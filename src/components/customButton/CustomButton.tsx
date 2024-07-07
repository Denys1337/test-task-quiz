import React from 'react';
import styles from './CustomButton.module.scss';

type CustomButtonPropsType = {
  handleSubmit: () => void;
  title: string;
  validation: boolean;
}

const CustomButton: React.FC<CustomButtonPropsType> = ({handleSubmit, title, validation}) => {
  return (
    <button onClick={handleSubmit} className={validation ? styles.buttonText : styles.buttonTextDisabled}>{title}</button>
  )
}

export default CustomButton;