// SEMANA 15 (ETAPA 4): Página protegida do Carrinho
// Só acessível se usuário está autenticado (PrivateRoute)
// Estrutura base para carrinho de compras (implementação futura)

import { Link } from "react-router-dom";

function Carrinho() {
  return (
    <section className="carrinho-container">
      <div className="carrinho-card">
        <h1>🛒 Carrinho de Compras</h1>

        {/* Mensagem de carrinho vazio */}
        <div className="carrinho-vazio">
          <p className="emoji">🛍️</p>
          <p className="titulo">Seu carrinho está vazio</p>
          <p className="descricao">
            Explore a loja e adicione produtos ao seu carrinho.
          </p>
        </div>

        {/* Link para voltar à loja */}
        <div className="acoes">
          <Link to="/" className="botao botao-primario">
            ← Continuar Comprando
          </Link>
        </div>

        {/* Informações úteis */}
        <div className="info-util">
          <p>💡 Quando você adicionar produtos, eles aparecerão aqui.</p>
        </div>
      </div>
    </section>
  );
}

export default Carrinho;
