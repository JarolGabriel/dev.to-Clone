import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserToken } from "@/utils/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserToken();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export function useUser() {
  return useContext(UserContext);
}
