import styled from 'styled-components';

export const StyledLi = styled.li<{ checked: boolean }>`
  padding: 12px 20px;
  border: ${props => (props.checked ? '2px solid rgba(228, 34, 155, 1)' : '2px solid rgba(0, 0, 0, 0.1)')};
  border-radius: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background: ${props => (props.checked ? 'rgba(228, 34, 155, 0.2)' : '#36173D')};
  color: #fff;
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
