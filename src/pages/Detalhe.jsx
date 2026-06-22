import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Botao from "../components/Botao";

function Detalhe() {
  // Obtém o ID do produto da URL
  const { id } = useParams();

  // Estados para armazenar dados do produto e status de carregamento
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // Busca dados do produto na API quando a página carrega ou ID muda
  useEffect(() => {
    setCarregando(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((dados) => {
        setProduto(dados);
        setCarregando(false);
      })
      .catch(() => {
        setProduto(null);
        setCarregando(false);
      });
  }, [id]);

  // Exibe spinner enquanto carrega dados
  if (carregando) {
    return (
      <section className="detalhe-carregando">
        <div className="spinner"></div>
        <p>⏳ Carregando detalhes do produto...</p>
      </section>
    );
  }

  // Exibe mensagem de erro se produto não foi encontrado
  if (!produto) {
    return (
      <section className="detalhe-erro">
        <h2>❌ Produto não encontrado</h2>
        <p>Desculpe, não conseguimos carregar os dados deste produto.</p>
        <Link to="/">← Voltar para a loja</Link>
      </section>
    );
  }

  // Formata preço em reais brasileiros
  const precoFormatado = produto.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Calcula quantidade de estrelas baseado no rating (0-5)
  const estrelas = Math.round(produto.rating || 0);
  const rating = "⭐".repeat(estrelas);

  return (
    <article className="produto-detalhe">
      <Link to="/" className="link-voltar">← Voltar para a loja</Link>

      {/* Layout em duas colunas: imagem à esquerda, detalhes à direita */}
      <div className="detalhe-container">
        {/* Coluna de imagem */}
        <div className="detalhe-imagem">
          <img src={produto.thumbnail} alt={produto.title} />
        </div>

        {/* Coluna de informações do produto */}
        <div className="detalhe-info">
          <h1>{produto.title}</h1>

          {/* Categoria do produto com ícone */}
          <p className="categoria">📦 {produto.category}</p>

          {/* Rating visual com estrelas */}
          <div className="rating">
            <span className="estrelas">{rating || "⭐"}</span>
            <span className="nota">({produto.rating?.toFixed(1) || "N/A"}/5)</span>
          </div>

          {/* Preço formatado em reais */}
          <p className="preco">{precoFormatado}</p>

          {/* Status de disponibilidade em estoque */}
          <div className="estoque">
            <span className={produto.stock > 0 ? "em-estoque" : "fora-estoque"}>
              {produto.stock > 0 ? `✅ ${produto.stock} em estoque` : "❌ Fora de estoque"}
            </span>
          </div>

          {/* Descrição detalhada do produto */}
          <div className="descricao">
            <h3>Descrição</h3>
            <p>{produto.description}</p>
          </div>

          {/* Informações técnicas: marca, SKU, peso */}
          <div className="info-detalhes">
            <div className="detalhe-item">
              <strong>Marca:</strong>
              <span>{produto.brand || "Não especificado"}</span>
            </div>
            <div className="detalhe-item">
              <strong>SKU:</strong>
              <span>{produto.sku || "Não especificado"}</span>
            </div>
            <div className="detalhe-item">
              <strong>Peso:</strong>
              <span>{produto.weight ? `${produto.weight}kg` : "Não especificado"}</span>
            </div>
          </div>

          {/* Botão de ação para adicionar ao carrinho */}
          <div className="acoes">
            <Botao texto="🛒 Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Detalhe;