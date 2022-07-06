import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert ("Não foi possível entrar");
      }
    }
  }

  async function updateProfile({ user }) {
    try {
      await api.put('/users', user);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      setData({ user, token: data.token });
      alert("Perfil atualizado.");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if (token && user) {
      api.defaults.headers.authorization = "Bearer " + token;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut, 
      updateProfile,
      user: data.user 
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
