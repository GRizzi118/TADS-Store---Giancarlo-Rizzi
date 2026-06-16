/*
  EVOLUÇÃO DO COMPONENTE PRODUTOCARD CONFORME ETAPAS
  

  SEMANA 12: Com dados locais (nome, preco, emoji, freteGratis)
  ----------
  import Selo from "./Selo";
  import Botao from "./Botao";

  function ProdutoCard({ nome, preco, emoji, freteGratis }) {
    const precoFormatado = preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <article className="produto-card">
        <div className="thumb">{emoji}</div>
        <h3>{nome}</h3>
        <p className="preco">{precoFormatado}</p>
        {freteGratis && <Selo texto="🚚 Frete Grátis" />}
        <Botao texto="Comprar" />
      </article>
    );
  }
*/

/* SEMANA 13: vitrine com dados da API (title, price, thumbnail, category);

function ProdutoCard({ produto }) {
  const { title, price, thumbnail, category } = produto;

  const precoFormatado = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      <div className="thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="categoria">{category}</p>
      <p className="preco">{precoFormatado}</p>
      <Botao texto="Comprar" />
    </article>
  );
}

export default ProdutoCard;
*/



// SEMANA 14: card ligado com <Link to= ...> para direcionar para a página de detalhes do produto
 
import { Link } from "react-router-dom";
import Botao from "./Botao";

function ProdutoCard({ produto }) {
  const { title, price, thumbnail, category } = produto;

  const precoFormatado = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      <div className="thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="categoria">{category}</p>
      <p className="preco">{precoFormatado}</p>
      <Link to={`/produto/${produto.id}`}>
      Ver detalhes</Link>
      <Botao texto="Comprar" />
    </article>
  );
}

export default ProdutoCard;
