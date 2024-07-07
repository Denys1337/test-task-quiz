import styled from 'styled-components';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #e4229b;
  background: ${props => (props.checked ? '#e4229b' : '#6d4376')};
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    display: ${props => (props.checked ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
`;
