// SEMANA 15 (ETAPA 4): Componente PrivateRoute para proteger rotas
// Se usuário está logado, renderiza a página; se não, redireciona para /login

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Componente que atua como "porteiro" das rotas protegidas
// Se usuário está logado, renderiza o componente; se não, redireciona ao login
function PrivateRoute({ children }) {
  const { logado } = useAuth();

  // Se está logado, mostra a página; se não, redireciona para /login
  return logado ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
