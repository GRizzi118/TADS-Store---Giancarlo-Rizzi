// SEMANA 15 (ETAPA 4): Componente RotaPrivada para proteger rotas
// Se usuário está logado, renderiza a página; se não, redireciona para /login

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RotaPrivada({ children }) {
  const { logado } = useAuth();

  // logado? mostra a página : manda pro login
  return logado ? children : <Navigate to="/login" />;
}

export default RotaPrivada;
