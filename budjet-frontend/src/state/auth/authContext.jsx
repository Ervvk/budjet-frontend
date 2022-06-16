import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  loggedUser: {},
  login: () => {},
  logout: () => {},
});
