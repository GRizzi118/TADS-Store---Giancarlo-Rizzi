import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
  // Estados para gerenciar dados da vitrine
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  // Busca produtos da API quando o componente carrega
  useEffect(() => {
    setCarregando(true);
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((dados) => {
        setProdutos(dados.products);
        setCarregando(false);
      })
      .catch(() => {
        setErro("❌ Não foi possível carregar os produtos. Tente atualizar a página.");
        setCarregando(false);
      });
  }, []);

  // Exibe indicador de carregamento enquanto busca dados
  if (carregando) {
    return (
      <section className="vitrine-container">
        <div className="carregamento">
          <div className="spinner"></div>
          <p>⏳ Carregando produtos...</p>
        </div>
      </section>
    );
  }

  // Exibe mensagem de erro se falhar ao buscar
  if (erro) {
    return (
      <section className="vitrine-container">
        <p className="mensagem erro">{erro}</p>
      </section>
    );
  }

  // Extrai lista única de categorias dos produtos
  const categorias = [...new Set(produtos.map((p) => p.category))];

  // Filtra produtos por nome de busca e categoria selecionada
  const filtrados = produtos.filter((p) => {
    const bateNome = p.title.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = categoria === "" || p.category === categoria;
    return bateNome && bateCategoria;
  });

  return (
    <section className="vitrine-container">
      {/* Campo de busca por nome do produto */}
      <div className="filtros">
        <input
          className="campo-busca"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="🔍 Buscar produto..."
        />
      </div>

      {/* Botões de filtro por categoria */}
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

      {/* Exibe mensagem se nenhum produto corresponder aos filtros */}
      {filtrados.length === 0 ? (
        <div className="mensagem-vazia">
          <p className="emoji">😕</p>
          <h2>Nenhum produto encontrado</h2>
          <p>Tente outro termo de busca ou selecione outra categoria.</p>
          {busca && (
            <button
              className="botao-limpar"
              onClick={() => setBusca("")}
            >
              Limpar busca
            </button>
          )}
        </div>
      ) : (
        /* Grid de produtos filtrados */
        <div className="vitrine">
          {filtrados.map((p) => (
            <ProdutoCard key={p.id} produto={p} />
          ))}
        </div>
      )}

      {/* Mostra quantidade de resultados encontrados */}
      {filtrados.length > 0 && (
        <p className="resultado-busca">
          {filtrados.length} produto{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
        </p>
      )}
    </section>
  );
}

export default Vitrine;
