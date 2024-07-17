import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';


type TPrivateRoute = {
  children: ReactNode;
}

function PrivateRoute ({ children }: TPrivateRoute): ReactNode | JSX.Element {
  const spaces = useAppSelector((state) => state.authorization instanceof Object ? children : <Navigate to='/login' />);
  return spaces;
}

export default PrivateRoute;
