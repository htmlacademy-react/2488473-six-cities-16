import { Navigate } from 'react-router-dom';
import AuthScreen from '../../pages/auth-screen';

import { useAppSelector } from '../../hooks';


function AuthProtect (): JSX.Element {
  const spaces = useAppSelector((state) => state.authorization instanceof Object ? <Navigate to='/'/> : <AuthScreen />);
  return spaces;
}

export default AuthProtect;
