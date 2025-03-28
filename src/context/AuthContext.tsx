import { createContext, useContext, useState, ReactNode } from "react";
import AuthService from "../services/AuthService";
import { SignInValueType } from "../types";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (value: SignInValueType) => any;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (value: SignInValueType) => {
    // Simulate an API call to log in the user
    const response = AuthService.signIn(value);

    // In a real application, you would replace this with an actual API call
    setIsLoggedIn(true)

    return response;
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
