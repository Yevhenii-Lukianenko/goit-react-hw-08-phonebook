import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import {
  selectAuth,
  selectIsLogin,
  selectIsLoading,
} from 'redux/auth/selectors';

import {
  HeaderContainer,
  LogoLink,
  UserName,
  Button,
  AuthNavigation,
  AuthLink,
} from './Header.styled';
import { LoaderButton } from 'components/Loaders/LoaderButton';
import { TbAddressBook, TbUserCircle, TbDoorExit } from 'react-icons/tb';

export const Header = () => {
  const user = useSelector(selectAuth);
  const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <LogoLink href="/">
        <TbAddressBook style={{ width: '1.5em', height: '1.5em' }} />
        Phonebook
      </LogoLink>
      {user && user.name && (
        <UserName>
          <TbUserCircle style={{ width: '1.5em', height: '1.5em' }} />
          {`${user.name}`}
        </UserName>
      )}
      {isLogin ? (
        <Button type="button" onClick={handleLogout}>
          {isLoading ? (
            <LoaderButton />
          ) : (
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <TbDoorExit />
              Logout
            </span>
          )}
        </Button>
      ) : (
        <AuthNavigation>
          <AuthLink to="/login">Log in</AuthLink>
          <AuthLink to="/register">Sign up</AuthLink>
        </AuthNavigation>
      )}
    </HeaderContainer>
  );
};
