// import Layout from "./components/Layout"; Sai na semana 14
// import Vitrine from "./components/Vitrine"; Sai na semana 14
// import "./App.css";

/*
  SEMANA 12 (ETAPA 1): Array fixo em App.jsx
  -------------------------------------------
  const produtos = [
    { id: 1, nome: "Notebook",       preco: 3499.90, emoji: "💻", freteGratis: true },
    { id: 2, nome: "Fone Bluetooth", preco: 199.90,  emoji: "🎧", freteGratis: false },
    { id: 3, nome: "Teclado Mecânico", preco: 349.00, emoji: "⌨️", freteGratis: true },
    { id: 4, nome: "Mouse Gamer",    preco: 129.90,  emoji: "🖱️", freteGratis: false },
    { id: 5, nome: "Monitor 24\"",   preco: 1299.90, emoji: "🖥️", freteGratis: true },
    { id: 6, nome: "Webcam HD",      preco: 249.90,  emoji: "📷", freteGratis: false },
  ];

  function App() {
    return (
      <Layout>
        <Vitrine produtos={produtos} />
      </Layout>
    );
  }
*/

/* SEMANA 13 (ETAPA 2 - PASSO 1): Vitrine gerencia seu próprio estado
function App() {
  return (
    <Layout>
      <Vitrine />
    </Layout>
  );
}

export default App; */ //Sai para entrar na Semana 14


/* SEMANA 14 (ETAPA 3 - ROTEAMENTO SPA)
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './pages/Home'
import Detalhe from './pages/Detalhe';
import NaoEncontrado from './pages/NaoEncontrado';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}
export default App;
*/ // Sai para entrar na Semana 15

// SEMANA 15 (ETAPA 4 - AUTENTICAÇÃO E ROTAS PROTEGIDAS)
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './pages/Home'
import Detalhe from './pages/Detalhe';
import NaoEncontrado from './pages/NaoEncontrado';
import Login from './pages/Login';
import MinhaConta from './pages/MinhaContа';
import Carrinho from './pages/Carrinho';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas (redirecionam ao login se não autenticado) */}
        <Route path="/minha-conta" element={<PrivateRoute><MinhaConta /></PrivateRoute>} />
        <Route path="/carrinho" element={<PrivateRoute><Carrinho /></PrivateRoute>} />

        {/* Rota 404 (deve ser a última) */}
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}
export default App;
