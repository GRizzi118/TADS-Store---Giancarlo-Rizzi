// SEMANA 15 (ETAPA 4): Context API para autenticação global com persistência localStorage

import { createContext, useContext, useState } from "react";

// Contexto global de autenticação
const AuthContext = createContext();

// Provider que envolve a aplicação e fornece estado de autenticação
export function AuthProvider({ children }) {
  // Estado persistido: lê do localStorage na inicialização (lazy initialization)
  const [logado, setLogado] = useState(
    () => localStorage.getItem("logado") === "true"
  );

  // Função para fazer login (marca como logado e persiste no localStorage)
  function entrar() {
    setLogado(true);
    localStorage.setItem("logado", "true");
  }

  // Função para fazer logout (remove estado e limpa localStorage)
  function sair() {
    setLogado(false);
    localStorage.removeItem("logado");
  }

  return (
    <AuthContext.Provider value={{ logado, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acessar o contexto de autenticação em qualquer componente
export function useAuth() {
  return useContext(AuthContext);
}
