import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin-left: auto;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  font-size: 16px;
`;

export const LogoutButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #e8768f;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: scale 0.5s ease;
  &:hover {
    scale: 1.1;
  }
`;
