/*
  EVOLUÇÃO DO COMPONENTE VITRINE
  ==============================

  SEMANA 12 (ETAPA 1): Array fixo, sem estado
  --------
  import ProdutoCard from "./ProdutoCard";

  function Vitrine({ produtos }) {
    return (
      <main className="vitrine">
        {produtos.map((p) => (
          <ProdutoCard
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            emoji={p.emoji}
            freteGratis={p.freteGratis}
          />
        ))}
      </main>
    );
  }

  export default Vitrine;
*/

import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todos");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((dados) => {
        setProdutos(dados.products);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os produtos.");
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando produtos...</p>;
  if (erro) return <p>{erro}</p>;

  //lista por categorias'
  const categorias = [...new Set(produtos.map((p) => p.category))];

  // lista derivada: filtra antes de mostrar
  const filtrados = produtos.filter((p) => {
  const bateNome = p.title.toLowerCase().includes(busca.toLowerCase());
  const bateCategoria = categoria === "" || p.category === categoria;
  return bateNome && bateCategoria; 
  });

  
  
  return (
  <section className="vitrine-container">
    <input
      className="campo-busca"
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      placeholder="Buscar produto..."
    />

    <div className="filtros-categoria">
      <button
        className={`btn-categoria ${categoria === "" ? "ativo" : ""}`}
        onClick={() => setCategoria("")}
      >
        Todas
      </button>
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`btn-categoria ${categoria === cat ? "ativo" : ""}`}
          onClick={() => setCategoria(cat)}
        >
          {cat}
        </button>
      ))}
    </div>

    {filtrados.length === 0 ? (
      <p className="mensagem">Nenhum produto encontrado.</p>
    ) : (
      <div className="vitrine">
        {filtrados.map((p) => (
          <ProdutoCard key={p.id} produto={p} />
        ))}
      </div>
    )}
  </section>
);
}

export default Vitrine;
