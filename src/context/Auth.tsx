import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAuthContextData } from "../interfaces/IAuthContextData";
import { IAuthContextProps } from "../interfaces/IAuthContextProps";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export const AuthContext = createContext<IAuthContextData | undefined>(
  undefined
);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<IAuthContextProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [ctxUser, setCtxUser] = useState<Object | null>(null);
  const [ctxIsUserLoggedIn, setCtxIsUserLoggedIn] = useState<boolean>(false);
  const [ctxIsAuthLoading, setCtxIsAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, initUser);
    return unsuscribe;
  }, []);

  const initUser = async (user: any) => {
    if (user) {
      setCtxUser({ ...user });

      setCtxIsUserLoggedIn(true);
    } else {
      setCtxUser(null);
      setCtxIsUserLoggedIn(false);
    }
    setCtxIsAuthLoading(false);
  };

  const contextValue: IAuthContextData = {
    currentUser: ctxUser,
    isUserLoggedIn: ctxIsUserLoggedIn,
    isAuthLoading: ctxIsAuthLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
