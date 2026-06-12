import { Link } from 'react-router-dom';

function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <nav>
        <Link to="/">Loja</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Cabecalho;
