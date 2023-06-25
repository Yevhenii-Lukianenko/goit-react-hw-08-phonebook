import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  width: 350px;
  border-radius: 8px;
  background-color: #ebe8e2;
`;

export const Title = styled.h2``;

export const Button = styled.button`
  padding: 0;
  width: 100px;
  height: 30px;
  background-color: #c0c4ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: scale 0.5s ease;
  &:hover {
    scale: 1.1;
  }
`;
