import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Sobre a TADS Store</h1>
      <p>Loja de produtos de tecnologia do TADS.</p>
      <Link to="/">Voltar para a loja</Link>
    </div>
  );
}

export default Sobre;
