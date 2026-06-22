// SEMANA 15 (ETAPA 4): Tela de Login com formulário controlado
// Login simulado: aluno / 1234
// Após validação bem-sucedida, chama entrar() e redireciona para /minha-conta

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  // Estados para armazenar valores do formulário
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  // Hook para contexto de autenticação
  const { entrar } = useAuth();

  // Hook para navegação programática
  const navegar = useNavigate();

  // Função chamada ao enviar o formulário
  function aoEnviar(e) {
    e.preventDefault();

    // Validação de credenciais (simulado: aluno / 1234)
    if (usuario === "aluno" && senha === "1234") {
      // Login bem-sucedido: marca como logado
      entrar();
      // Redireciona para minha-conta
      navegar("/minha-conta");
    }
  }

  return (
    <section className="login-container">
      <div className="login-card">
        <h1>🔐 Fazer Login</h1>

        {/* Formulário controlado com campos de entrada */}
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
              className="input-field"
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="botao-login"
          >
            🔓 Entrar
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
