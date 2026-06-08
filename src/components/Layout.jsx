import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout({ children }) {
  return (
    <div className="layout">
      <Cabecalho titulo="TADS Store" subtitulo="Os melhores produtos tech para você" />
      {children}
      <Rodape />
    </div>
  );
}

export default Layout;
