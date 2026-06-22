import { Link } from "react-router-dom";

// Página exibida quando usuário acessa uma rota não mapeada (URL inválida)
function NaoEncontrado() {
  return (
    <div className="pagina-nao-encontrada">
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você procura não existe.</p>
      <Link to="/" className="link-voltar-404">Voltar para a loja</Link>
    </div>
  );
}

export default NaoEncontrado;
