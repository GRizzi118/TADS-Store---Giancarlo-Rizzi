/*
  EVOLUÇÃO DO COMPONENTE PRODUTOCARD
  ==================================

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

import Botao from "./Botao";

// SEMANA 13: Com campos da API (title, price, thumbnail, category)
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
