import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Hub} from 'aws-amplify/utils';
import {HubCallback} from '@aws-amplify/core';
import {getCurrentUser} from 'aws-amplify/auth';

type UserType = UserData | null | undefined;

type AuthContextType = {
  user: UserType;
};

type UserData = {
  user: string | undefined;
  userId: string | undefined;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);

  const checkUser = async () => {
    try {
      const {username, userId} = await getCurrentUser();
      setUser({
        user: username,
        userId,
      });
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

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
