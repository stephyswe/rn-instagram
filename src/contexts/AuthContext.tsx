import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Hub} from 'aws-amplify/utils';
import {HubCallback} from '@aws-amplify/core';
import {fetchAuthSession} from 'aws-amplify/auth';

type JsonPrimitive = null | string | number | boolean;
/** JSON array type */
type JsonArray = JsonPrimitive[];

interface JwtPayloadStandardFields {
  exp?: number;
  iss?: string;
  aud?: string | string[];
  nbf?: number;
  iat?: number;
  scope?: string;
  jti?: string;
  sub?: string;
  credentials?: string;
}
interface JsonObject {
  [x: string]: JsonPrimitive | JsonArray | JsonObject;
}

type JwtPayload = JwtPayloadStandardFields & JsonObject;

type UserType = JwtPayload | null | undefined;

type AuthContextType = {
  user: UserType;
  userId: string;
  jwtToken: string;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  userId: '',
  jwtToken: '',
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);

  const checkUser = async () => {
    try {
      const {tokens} = await fetchAuthSession();
      const authUser = tokens?.idToken?.payload;

      // Check if authUser is defined before attempting to add credentials
      if (authUser) {
        (authUser.credentials = (tokens?.accessToken || '').toString() || ''),
          setUser(authUser);
      } else {
        setUser(null);
      }
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signedOut') {
        setUser(null);
      }
      if (event === 'signedIn') {
        checkUser();
      }
    };
    const hubListenerCancel = Hub.listen('auth', listener);
    Hub.listen('auth', listener);

    return () => hubListenerCancel();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userId: user?.sub || '',
        jwtToken: user?.credentials || '',
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
