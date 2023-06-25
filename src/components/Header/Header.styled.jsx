import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
  margin-bottom: 24px;
  height: 10vh;
  background-color: #ebe8e2;
  border-radius: 6px;
`;

export const UserName = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  font-size: 16px;
`;

export const Button = styled.button`
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

export const AuthNavigation = styled.div`
  display: flex;
  gap: 24px;
  margin-left: auto;
`;

export const AuthLink = styled(NavLink)`
  padding: 6px 0;
  text-align: center;
  width: 100px;
  text-decoration: none;
  border-radius: 8px;
  &.active {
    background-color: #ded8ce;
    pointer-events: none;
  }
`;
