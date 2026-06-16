
/* SEMANA 13: Página de detalhes do produto

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

function BotaoVoltar() {
    const navegar = useNavigate();
    return <button onClick={() => navegar("/")}>Voltar</button>;
}

function Detalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  
useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then((dados) => {
        setProduto(dados);
        setCarregando(false);
    });
}, [id]); //re-busca se o id da URL mudar

if (carregando) return <p>Carregando...</p>;

return (
    <article className="produto-detalhe">
        <BotaoVoltar />
        <h1>{produto.title}</h1>
        <img src={produto.thumbnail} alt={produto.title} />
        <p>{produto.description}</p>
        <p className="preco"> R$ {produto.price}</p>
    </article>
);
}
export default Detalhe;
*/

// SEMANA 14: Configuração de rotas com React Router

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((dados) => setProduto(dados));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <article>
      <Link to="/">← Voltar</Link>
      <h1>{produto.title}</h1>
      <img src={produto.thumbnail} alt={produto.title} />
      <p>R$ {produto.price}</p>
    </article>
  );
}

export default Detalhe;



