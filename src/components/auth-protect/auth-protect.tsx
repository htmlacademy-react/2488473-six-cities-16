import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import AuthScreen from '../../pages/auth-screen';

type TAuthProtect = {
  authorization: AuthorizationStatus;
}

function AuthProtect ({ authorization }: TAuthProtect): JSX.Element {
  return authorization === AuthorizationStatus.Auth ? <Navigate to='/' /> : <AuthScreen />;
}

export default AuthProtect;
