// SEMANA 15 (ETAPA 4): Página protegida de Minha Conta
// Só acessível se usuário está autenticado (PrivateRoute)
// Exibe dados do usuário e permite logout

import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MinhaConta() {
  // Contexto de autenticação com dados do usuário logado
  const { usuario, sair } = useAuth();

  // Hook para navegação programática
  const navegar = useNavigate();

  // Função para fazer logout e redirecionar
  const aoSair = () => {
    sair();
    navegar("/");
  };

  return (
    <section className="minha-conta-container">
      <div className="minha-conta-card">
        <h1>👤 Minha Conta</h1>

        {/* Bem-vindo usuário */}
        <div className="usuario-info">
          <p className="saudacao">Bem-vindo, <strong>{usuario}</strong>! 🎉</p>
        </div>

        {/* Informações da conta (simuladas) */}
        <div className="info-secao">
          <h2>📋 Informações da Conta</h2>

          <div className="info-item">
            <strong>Usuário:</strong>
            <span>{usuario}</span>
          </div>

          <div className="info-item">
            <strong>Email:</strong>
            <span>{usuario}@tadsstore.com</span>
          </div>

          <div className="info-item">
            <strong>Data de Cadastro:</strong>
            <span>22 de junho de 2026</span>
          </div>

          <div className="info-item">
            <strong>Status:</strong>
            <span className="status-ativo">✅ Ativo</span>
          </div>
        </div>

        {/* Pedidos e histórico (simulado) */}
        <div className="info-secao">
          <h2>🛍️ Meus Pedidos</h2>
          <p className="texto-vazio">Nenhum pedido realizado ainda.</p>
        </div>

        {/* Ações */}
        <div className="acoes">
          <Link to="/" className="botao botao-secundario">
            ← Voltar para Loja
          </Link>
          <button onClick={aoSair} className="botao botao-logout">
            🚪 Sair
          </button>
        </div>
      </div>
    </section>
  );
}

export default MinhaConta;
