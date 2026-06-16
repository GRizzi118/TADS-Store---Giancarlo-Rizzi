/* import { Link } from 'react-router-dom'; //Semana 13: Substitua Link por NavLink para destacar a página ativa */

/*SEMANA 13: Com dados locais (nome, preco, emoji, freteGratis)
import { NavLink } from 'react-router-dom'; //Semana 14

function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <nav>
        <NavLink to="/">Loja</NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
*/

//SEMANA 14 - card ligado com <Link to= ...> para direcionar para a página de detalhes do produto

import { NavLink } from 'react-router-dom';

function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-ativo" : ""}>
          Loja
        </NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
