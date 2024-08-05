import { Navigate } from 'react-router-dom';
import AuthScreen from '../../pages/auth-screen';

import { useAppSelector } from '../../hooks';
import { getAuthorization } from '../../store/slices/auth/auth.selector';


function AuthProtect (): JSX.Element {
  const spaces = useAppSelector(getAuthorization) instanceof Object ? <Navigate to='/'/> : <AuthScreen />;
  return spaces;
}

export default AuthProtect;
