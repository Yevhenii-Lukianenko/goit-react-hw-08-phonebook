import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectAuth, selectIsLoading } from 'redux/auth/selectors';

import { MenuContainer, UserName, LogoutButton } from './UserMenu.styled';
import { TbUserCircle, TbDoorExit } from 'react-icons/tb';
import { LoaderButton } from 'components/Loaders/LoaderButton';

export const UserMenu = () => {
  const user = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <MenuContainer>
      {user && user.name && (
        <UserName>
          <TbUserCircle style={{ width: '1.5em', height: '1.5em' }} />
          {`${user.name}`}
        </UserName>
      )}

      <LogoutButton type="button" onClick={handleLogout}>
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
      </LogoutButton>
    </MenuContainer>
  );
};
