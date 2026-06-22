// SEMANA 15 (ETAPA 4): Tela de Login com formulário controlado
// Login simulado: admin / 123456
// Após login bem-sucedido, redireciona para /minha-conta

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  // Estados para armazenar valores do formulário
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Hook para contexto de autenticação
  const { entrar } = useAuth();

  // Hook para navegação programática
  const navegar = useNavigate();

  // Função chamada ao enviar o formulário
  const aoEnviar = (e) => {
    e.preventDefault();
    setErro("");

    // Validação simples
    if (!usuario.trim() || !senha.trim()) {
      setErro("Usuário e senha são obrigatórios.");
      return;
    }

    setCarregando(true);

    // Simula delay da requisição
    setTimeout(() => {
      // Tenta fazer login com as credenciais fornecidas
      const sucesso = entrar(usuario, senha);

      if (sucesso) {
        // Login bem-sucedido, redireciona para minha-conta
        navegar("/minha-conta");
      } else {
        // Credenciais inválidas
        setErro("Usuário ou senha inválidos. Tente: admin / 123456");
        setSenha("");
      }

      setCarregando(false);
    }, 500);
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <h1>🔐 Fazer Login</h1>

        <form onSubmit={aoEnviar} className="login-form">
          {/* Campo de usuário */}
          <div className="form-group">
            <label htmlFor="usuario">Usuário:</label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuário"
              disabled={carregando}
              className="input-field"
            />
          </div>

          {/* Campo de senha */}
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              disabled={carregando}
              className="input-field"
            />
          </div>

          {/* Mensagem de erro */}
          {erro && <p className="mensagem-erro">❌ {erro}</p>}

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={carregando}
            className="botao-login"
          >
            {carregando ? "⏳ Entrando..." : "🔓 Entrar"}
          </button>
        </form>

        {/* Link para voltar ao início */}
        <p className="link-voltar">
          Voltar para <Link to="/">🏠 Loja</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
