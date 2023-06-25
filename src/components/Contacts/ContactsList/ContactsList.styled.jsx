import styled from '@emotion/styled';

export const ContactsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 20px;
  background-color: #ebe8e2;
  border-radius: 8px;
`;

export const PanelLoyout = styled.div`
  display: flex;
  align-items: self-start;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  padding: 0 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin-top: 24px;
`;
