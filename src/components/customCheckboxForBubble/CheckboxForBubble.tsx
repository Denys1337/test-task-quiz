import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: 600;
  font-family: Nunito sans-serif;
  color: #fff;
`;

interface StyledCheckboxProps {
  checked: boolean;
  disabled: boolean;
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 88px;
  height: 88px;
  background: rgba(54, 23, 61, 1);
  border: ${props => props.checked ? '2px solid rgba(228, 34, 155, 1)' : 'none'};
  border-radius: 50%;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
`;

type CheckboxForBubblePropsType = {
  className?: string;
  checked: boolean;
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  img: string;
};

const CheckboxForBubble: React.FC<CheckboxForBubblePropsType> = ({ className, checked, disabled, onChange, text, img }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} disabled={disabled} />
    <StyledCheckbox checked={checked} disabled={disabled}>
      <Icon src={img} alt="Checkbox Icon" />
      <Text>{text}</Text>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default CheckboxForBubble;
