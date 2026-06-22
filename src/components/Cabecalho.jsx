/* import { Link } from 'react-router-dom'; //Semana 13: Substitua Link por NavLink para destacar a página ativa */

/*SEMANA 13: Com dados locais (nome, preco, emoji, freteGratis)
import { NavLink } from 'react-router-dom'; //Semana 14

function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <nav>
        <NavLink to="/">Loja</NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
*/

/*SEMANA 14 - card ligado com <Link to= ...> para direcionar para a página de detalhes do produto
import { NavLink } from 'react-router-dom';

function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-ativo" : ""}>
          Loja
        </NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
*/ // Sai para entrar na Semana 15

// SEMANA 15 - Autenticação: Entrar/Sair no cabeçalho, links para Minha Conta e Carrinho
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Cabecalho({ titulo, subtitulo }) {
  // Hook para acessar dados de autenticação
  const { logado, usuario, sair } = useAuth();

  // Hook para navegação programática
  const navegar = useNavigate();

  // Função para fazer logout
  const aoSair = () => {
    sair();
    navegar("/");
  };

  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-ativo" : ""}>
          Loja
        </NavLink>

        {/* Links protegidos: só aparecem se logado */}
        {logado && (
          <>
            <NavLink to="/carrinho" className={({ isActive }) => isActive ? "nav-ativo" : ""}>
              🛒 Carrinho
            </NavLink>
            <NavLink to="/minha-conta" className={({ isActive }) => isActive ? "nav-ativo" : ""}>
              👤 {usuario}
            </NavLink>
          </>
        )}

        {/* Controle de Entrar/Sair */}
        <div className="nav-auth">
          {logado ? (
            <button onClick={aoSair} className="btn-sair">
              🚪 Sair
            </button>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? "nav-ativo" : ""}>
              🔐 Entrar
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;
