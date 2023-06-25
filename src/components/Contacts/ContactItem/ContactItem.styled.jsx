import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #ded8ce;
  // border: 1px solid black;
  border-radius: 8px;
`;

export const ContactText = styled.p`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 0;
  height: 40px;
  width: 40px;
  color: #e8768f;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: scale 0.5s ease;
  &:hover {
    scale: 1.3;
  }
`;
