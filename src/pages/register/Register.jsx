import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLogin } from 'redux/auth/selectors';
import { RegisterForm } from 'components/Auth/RegisterForm/RegisterForm';

const Register = () => {
  const isLogin = useSelector(selectIsLogin);

  return <>{isLogin ? <Navigate to="/" /> : <RegisterForm />}</>;
};

export default Register;
