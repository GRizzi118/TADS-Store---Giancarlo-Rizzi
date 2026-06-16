
import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <Link to="/">Voltar para a loja</Link>
    </div>
  );
}

export default NaoEncontrado;
