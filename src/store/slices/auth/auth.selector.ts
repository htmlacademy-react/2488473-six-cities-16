import { AuthorizationStatus, NameSpace } from "../../../const";
import { AuthenticatedProperties, State } from "../../../types/global";

export const getAuthorization = (state: State): AuthorizationStatus | AuthenticatedProperties => state[NameSpace.Auth].authorization;
export const getIsAuthorizationLoading = (state: State): boolean => state[NameSpace.Auth].isAuthLoading;
