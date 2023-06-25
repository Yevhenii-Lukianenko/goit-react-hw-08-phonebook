import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  margin-right: 24px;
  width: 400px;
  height: fit-content;
  border-radius: 6px;
  background-color: #ebe8e2;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Submit = styled.button`
  margin: 0 auto;
  padding: 0;
  width: 40px;
  height: 40px;
  color: #83ae8c;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: scale 0.5s ease;
  &:hover {
    scale: 1.2;
  }
`;
