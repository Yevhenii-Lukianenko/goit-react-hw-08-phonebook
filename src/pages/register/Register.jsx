// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { selectIsLogin } from 'redux/auth/selectors';
import { RegisterForm } from 'components/Auth/RegisterForm/RegisterForm';

const Register = () => {
  // const navigate = useNavigate();
  // const isLogin = useSelector(selectIsLogin);

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate('/');
  //   }
  // });

  return <RegisterForm />;
};

export default Register;
