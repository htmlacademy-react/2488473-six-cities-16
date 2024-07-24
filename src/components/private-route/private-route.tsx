import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { getAuthorization } from '../../store/slices/auth/auth.selector';


type TPrivateRoute = {
  children: ReactNode;
}

function PrivateRoute ({ children }: TPrivateRoute): ReactNode | JSX.Element {
  const spaces = useAppSelector(getAuthorization) instanceof Object ? children : <Navigate to='/login' />;
  return spaces;
}

export default PrivateRoute;
