import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Auth } from "aws-amplify";

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (username: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if a user is already signed in
    Auth.currentAuthenticatedUser()
      .then((userData) => {
        const { username, attributes } = userData;
        const email = attributes.email || "";
        setUser({ username, email });
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      await Auth.signIn(username, password);
      const userData = await Auth.currentAuthenticatedUser();
      const { username: signedInUsername, attributes } = userData;
      const email = attributes.email || "";
      setUser({ username: signedInUsername, email });
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    try {
      await Auth.signUp({ username, password, attributes: { email } });
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const contextValue: AuthContextType = {
    user,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
