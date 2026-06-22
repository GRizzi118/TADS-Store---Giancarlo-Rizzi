// SEMANA 15 (ETAPA 4): Context API para autenticação global com persistência localStorage

import { createContext, useContext, useState, useEffect } from "react";

// Contexto global de autenticação
const AuthContext = createContext();

// Provider que envolve a aplicação e fornece estado de autenticação
export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");

  // Recupera a sessão ao montar o componente (persiste ao recarregar)
  useEffect(() => {
    const sessao = localStorage.getItem("sessao");
    if (sessao) {
      const dados = JSON.parse(sessao);
      setLogado(true);
      setUsuario(dados.usuario);
    }
  }, []);

  // Função para fazer login (simulado: admin / 123456)
  const entrar = (usuarioInput, senhaInput) => {
    // Login simulado com credenciais fixas
    if (usuarioInput === "admin" && senhaInput === "123456") {
      setLogado(true);
      setUsuario(usuarioInput);
      // Salva sessão no localStorage para persistir ao recarregar
      localStorage.setItem("sessao", JSON.stringify({ usuario: usuarioInput }));
      return true;
    }
    return false;
  };

  // Função para fazer logout
  const sair = () => {
    setLogado(false);
    setUsuario("");
    localStorage.removeItem("sessao");
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acessar o contexto de autenticação em qualquer componente
export function useAuth() {
  return useContext(AuthContext);
}
