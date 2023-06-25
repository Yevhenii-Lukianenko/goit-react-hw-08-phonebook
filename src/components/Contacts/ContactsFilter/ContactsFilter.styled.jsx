import styled from '@emotion/styled';

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px;
  // height: 112px;
  border: 1px solid black;
  border-radius: 6px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 4px 10px;
  width: 250px;
  height: 28px;
  outline: none;
  border-image: linear-gradient(
    90deg,
    rgba(0, 35, 255, 1) 0%,
    rgba(253, 212, 45, 1) 100%
  );
  border-image-slice: 1;
  transition: border 0.5s ease;
  &:focus {
    border-image: linear-gradient(
      270deg,
      rgba(0, 35, 255, 1) 0%,
      rgba(253, 212, 45, 1) 100%
    );
    border-image-slice: 1;
  }
`;
