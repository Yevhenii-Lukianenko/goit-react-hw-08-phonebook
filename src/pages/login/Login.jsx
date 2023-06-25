// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { selectIsLogin } from 'redux/auth/selectors';
import { LoginForm } from 'components/Auth/LoginForm/LoginForm';

const Login = () => {
  // const navigate = useNavigate();
  // const isLogin = useSelector(selectIsLogin);

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate('/');
  //   }
  // });

  return <LoginForm />;
};

export default Login;
