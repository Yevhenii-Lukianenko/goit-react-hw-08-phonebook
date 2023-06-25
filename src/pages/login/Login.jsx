import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLogin } from 'redux/auth/selectors';
import { LoginForm } from 'components/Auth/LoginForm/LoginForm';

const Login = () => {
  const isLogin = useSelector(selectIsLogin);

  return <>{isLogin ? <Navigate to="/" /> : <LoginForm />}</>;
};

export default Login;
