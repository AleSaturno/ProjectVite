import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, LoginRequest, VerityTokenRequet } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setISAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await LoginRequest(user);
      console.log(res);
      setISAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setISAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }
      try {
        const res = await VerityTokenRequet(cookies.token);
        if (!res.data) {
          setISAuthenticated(false);
          setLoading(false);

          return;
        }

        setISAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setISAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, user, isAuthenticated, errors, signin, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
