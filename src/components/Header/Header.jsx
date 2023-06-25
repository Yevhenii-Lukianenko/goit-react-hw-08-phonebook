import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';

import {
  HeaderContainer,
  LogoLink,
  AuthNavigation,
  AuthLink,
} from './Header.styled';

import { TbAddressBook } from 'react-icons/tb';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <HeaderContainer>
      <LogoLink href="/">
        <TbAddressBook style={{ width: '1.5em', height: '1.5em' }} />
        Phonebook
      </LogoLink>

      {isLogin ? (
        <UserMenu />
      ) : (
        <AuthNavigation>
          <AuthLink to="/login">Log in</AuthLink>
          <AuthLink to="/register">Sign up</AuthLink>
        </AuthNavigation>
      )}
    </HeaderContainer>
  );
};
