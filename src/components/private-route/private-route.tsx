import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { AuthorizationStatus } from "../../const";

type TPrivateRoute = {
  authorization: AuthorizationStatus,
  children: ReactNode
}

function PrivateRoute ({ authorization, children }: TPrivateRoute): JSX.Element {
  return (
    <>
      {authorization === AuthorizationStatus.Auth ?
        children :
        <Navigate to='/login' />
      }
    </>
  )
}

export default PrivateRoute;
