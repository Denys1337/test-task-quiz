import React from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './CustomCheckbox.styled';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} onClick={onChange} />
  </CheckboxContainer>
);

export default CustomCheckbox;
