import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import {} from "../GlobalStyles/theme";
import useAuth from "../Hooks/useAuth";
import useColorScheme from "../Hooks/useColorScheme";
import { User } from "../Types/Types";

export const UserContext = createContext({
  user: null as User | null,
  handleSetUser: (user: User) => {},
  handleLogout: () => {},
});

const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const { getUserFromStorage } = useAuth();
  const { loadPreferredTheme } = useColorScheme();
  const handleSetUser = useCallback((user: User) => {
    setUser(user);
  }, []);

  useEffect(() => {
    if (!user) {
      const loadedUser = getUserFromStorage();
      if (loadedUser) {
        handleSetUser(loadedUser);
        loadPreferredTheme(`${loadedUser?.role}.${loadedUser?.id}`);
      }
    }
  });

  const handleLogout = () => {
    setUser(null);
  };

  const context = {
    user,
    handleSetUser,
    handleLogout,
  };

  return (
    <UserContext.Provider value={context}>
      {user && props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
