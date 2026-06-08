# 🛒 TADS Store

**Projeto Integrador — Desenvolvimento Front-end**
Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) — IFES
Aluno: **Giancarlo Mercês Rizzi**

---

## 📖 Sobre o Projeto

A **TADS Store** é uma loja virtual (e-commerce) construída em **React**, desenvolvida ao longo de semanas como projeto integrador da disciplina de Desenvolvimento Front-end II. Cada semana adiciona uma nova camada de funcionalidades e conceitos.

**Status Atual:** Etapa 2 (Semana 13) — Integração com API real, hooks de estado e efeitos, filtros dinâmicos.

---

## 🔧 Tecnologias

- **React 19** — biblioteca de interface
- **Vite** — bundler ultrarrápido e servidor de desenvolvimento
- **CSS Puro** — estilização dos componentes
- **JavaScript ES6+** — async/await, spread operator, arrow functions
- **Fetch API** — requisições HTTP para APIs REST
- **DummyJSON** — API pública com dados de produtos

---

## 🚀 Como Executar

```bash
# Clonar ou navegar para o projeto
cd TADS-Store

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse **`http://localhost:5173`** no navegador.

---

## 📁 Estrutura de Pastas

```
src/
├── App.jsx               # Componente raiz
├── App.css               # Estilos globais
├── index.css             # Reset e variáveis globais
├── main.jsx              # Entry point do React
└── components/
    ├── Layout.jsx        # Header + Main + Footer
    ├── Cabecalho.jsx     # Topo da página
    ├── Rodape.jsx        # Rodapé dinâmico
    ├── Vitrine.jsx       # ⭐ PRINCIPAL: estado + fetch + filtros
    ├── ProdutoCard.jsx   # Card individual
    ├── Botao.jsx         # Botão reutilizável
    └── Selo.jsx          # Badge (Semana 12)
```

---

## 📊 Funcionalidades por Semana

| Semana | Etapa | Tema | Status |
|--------|-------|------|--------|
| 12 | 1 | Componentização + Array fixo | ✅ Concluída |
| 13 | 2 | API + Hooks (useState, useEffect) + Filtros | ✅ Concluída |
| 14 | 3 | React Router (Rotas) | 🔜 Próxima |
| 15 | 4 | Autenticação | 🔜 Futura |

---

## 📚 SEMANA 12: Componentização com Dados Locais

### O que foi feito

Estrutura base da aplicação com componentes reutilizáveis e dados fixos em array.

### Estrutura Base

```javascript
// App.jsx
const produtos = [
  { id: 1, nome: "Notebook", preco: 3499.90, emoji: "💻", freteGratis: true },
  { id: 2, nome: "Fone Bluetooth", preco: 199.90, emoji: "🎧", freteGratis: false },
  // ... mais 4 produtos
];

function App() {
  return (
    <Layout>
      <Vitrine produtos={produtos} />
    </Layout>
  );
}
```

### Componentes Semana 12

**Vitrine.jsx:**
```javascript
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
```

**ProdutoCard.jsx:**
```javascript
function ProdutoCard({ nome, preco, emoji, freteGratis }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      <div className="thumb">{emoji}</div>
      <h3>{nome}</h3>
      <p className="preco">{precoFormatado}</p>
      {freteGratis && <Selo texto="🚚 Frete Grátis" />}
      <Botao texto="Comprar" />
    </article>
  );
}
```

### Conceitos Aprendidos (Semana 12)

- ✅ **Componentização** — cada arquivo = 1 componente com responsabilidade única
- ✅ **Props** — passar dados entre componentes
- ✅ **`.map()` com `key`** — renderizar listas sem warnings
- ✅ **Renderização Condicional** — `{condicao && <JSX />}`
- ✅ **Formatação de Moeda** — `.toLocaleString("pt-BR", { style: "currency" })`
- ✅ **Grid Responsivo** — `repeat(auto-fit, minmax(180px, 1fr))`

### Características Semana 12

| Aspecto | Semana 12 |
|---------|-----------|
| Dados | Array fixo (6 produtos) |
| Quantidade | Sempre 6 |
| Imagens | Emojis |
| Interatividade | Apenas layout |
| Filtros | ❌ Nenhum |
| API | ❌ Não |

---

## 📊 SEMANA 13: API Real + Hooks + Filtros Dinâmicos

### O que mudou

Substituição de dados locais por API real, adição de estado com hooks, tratamento de carregamento/erro e filtros dinâmicos.

### Arquitetura Semana 13

```javascript
// App.jsx - SIMPLIFICADO
function App() {
  return (
    <Layout>
      <Vitrine />  {/* Vitrine gerencia TUDO agora */}
    </Layout>
  );
}
```

**Vitrine.jsx - TRANSFORMADO:**
```javascript
import { useState, useEffect } from "react";

function Vitrine() {
  // ESTADO: dados que mudam
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);

  // EFEITO: buscar dados ao montar
  useEffect(() => {
    // Fetch produtos da API
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => res.json())
      .then((dados) => {
        setProdutos(dados.products);
        setCarregando(false);
      })
      .catch((err) => {
        setErro("Não foi possível carregar os produtos.");
        setCarregando(false);
      });

    // Fetch categorias da API
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((dados) => setCategorias(dados));
  }, []); // [] = executa 1 vez ao montar

  // FILTRO: criar lista derivada
  const filtrados = produtos.filter((p) => {
    const temBusca = p.title
      .toLowerCase()
      .includes(busca.toLowerCase());
    const temCategoria = !categoria || p.category === categoria;
    return temBusca && temCategoria;
  });

  // RENDERIZAR baseado no estado
  if (carregando) {
    return (
      <main className="vitrine">
        <p className="mensagem">⏳ Carregando produtos...</p>
      </main>
    );
  }

  if (erro) {
    return (
      <main className="vitrine">
        <p className="mensagem erro">❌ {erro}</p>
      </main>
    );
  }

  // SUCESSO: renderizar com filtros
  return (
    <div className="vitrine-container">
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="campo-busca"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="filtro-categoria"
        >
          <option value="">Todas as categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <main className="vitrine">
        {filtrados.length === 0 ? (
          <p className="mensagem">Nenhum produto encontrado.</p>
        ) : (
          filtrados.map((p) => (
            <ProdutoCard key={p.id} product={p} />
          ))
        )}
      </main>
    </div>
  );
}
```

**ProdutoCard.jsx - ATUALIZADO:**
```javascript
function ProdutoCard({ product }) {
  const { title, price, thumbnail, category } = product;

  const precoFormatado = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      <div className="thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="categoria">{category}</p>
      <p className="preco">{precoFormatado}</p>
      <Botao texto="Comprar" />
    </article>
  );
}
```

### Conceitos Aprendidos (Semana 13)

- ✅ **useState** — guardar dados que mudam entre renders
- ✅ **useEffect** — executar código quando componente monta/depende de estado
- ✅ **Array de Dependências** — `[]` = 1 vez ao montar, `[busca]` = toda vez que busca muda
- ✅ **Fetch API** — requisições HTTP assíncronas
- ✅ **Promise .then() .catch()** — tratar respostas e erros
- ✅ **.filter() e .map()** — processar e renderizar listas derivadas
- ✅ **Renderização Condicional** — `if (carregando) return...`
- ✅ **Inputs Controlados** — value do input = estado, onChange = setState
- ✅ **Select Dinâmico** — options preenchidas pela API

### Características Semana 13

| Aspecto | Semana 12 | Semana 13 |
|---------|-----------|-----------|
| Dados | Array fixo (6) | API dinâmica (~30) |
| Imagens | Emojis | URLs reais |
| Estado | ❌ Nenhum | ✅ 6 estados |
| Busca | ❌ Nenhuma | ✅ Tempo real |
| Filtro por Categoria | ❌ Nenhum | ✅ Dinâmico (API) |
| Tratamento de Erro | ❌ Nenhum | ✅ Sim |
| Carregamento | ❌ Nenhum | ✅ Sim |
| Realismo | ❌ Dados fixos | ✅ API real |

---

## 🔄 Fluxo de Dados

### 1. CARREGAMENTO (página abre)

```
Vitrine monta
  ↓
useEffect executa (porque [])
  ↓
fetch produtos → setProdutos()
fetch categorias → setCategorias()
  ↓
setCarregando(false)
  ↓
React redesenha
  ↓
Produtos aparecem ✅
```

### 2. BUSCA (usuário digita)

```
<input onChange={(e) => setBusca(e.target.value)} />
  ↓
setBusca() atualiza estado
  ↓
React redesenha Vitrine
  ↓
filtrados = produtos.filter(p => p.title inclui "busca")
  ↓
Tela mostra apenas produtos da busca ✅
```

### 3. FILTRO (usuário seleciona categoria)

```
<select onChange={(e) => setCategoria(e.target.value)} />
  ↓
setCategoria() atualiza estado
  ↓
React redesenha Vitrine
  ↓
filtrados = produtos.filter(p => p.category === categoria)
  ↓
Tela mostra apenas categoria selecionada ✅
```

### 4. BUSCA + CATEGORIA (ambos juntos)

```
filtrados = produtos.filter((p) => {
  const temBusca = p.title.includes("phone");        // true
  const temCategoria = p.category === "electronics"; // true
  return temBusca && temCategoria;  // true && true = true ✅
});

Resultado: apenas eletrônicos com "phone" no nome
```

---

## 🧪 Como Testar

### Teste 1: Busca
1. Abra http://localhost:5173
2. Digite "phone" no campo Buscar
3. **Esperado:** Apenas produtos com "phone" aparecem
4. Limpe o campo
5. **Esperado:** Todos os ~30 produtos voltam

### Teste 2: Filtro por Categoria
1. Selecione "electronics"
2. **Esperado:** Apenas eletrônicos aparecem
3. Selecione "beauty"
4. **Esperado:** Apenas beleza aparecem

### Teste 3: Busca + Categoria
1. Selecione "electronics"
2. Digite "phone"
3. **Esperado:** Apenas eletrônicos com "phone" no nome

### Teste 4: Carregamento
1. Abra DevTools (F12) → Network → Throttle para Slow 3G
2. Recarregue
3. **Esperado:** "⏳ Carregando..." por alguns segundos

### Teste 5: Sem Resultados
1. Selecione "beauty"
2. Digite "phone" (não existe beleza com "phone")
3. **Esperado:** "Nenhum produto encontrado."

---

## 📖 Referência de Conceitos

### useState: Guardar Dados

```javascript
// Sintaxe
const [valor, setValor] = useState(valorInicial);

// Exemplo: Busca
const [busca, setBusca] = useState("");

// Atualizar
setBusca("novo valor");  // React redesenha automático
```

### useEffect: Executar Código em Momentos Específicos

```javascript
// Roda 1 vez ao montar
useEffect(() => {
  fetch("url").then(...).catch(...);
}, []);

// Roda quando [dependência] muda
useEffect(() => {
  console.log("Busca mudou:", busca);
}, [busca]);

// Roda TODA vez (evite!)
useEffect(() => {
  console.log("Renderizou");
});
```

### Fetch: Buscar Dados

```javascript
fetch("https://api.com/data")
  .then((res) => res.json())        // converter para JSON
  .then((dados) => setProdutos(dados.products))
  .catch((err) => setErro(err.message));
```

### Filter e Map: Processar Listas

```javascript
// Filter: criar nova lista com condição
const filtrados = produtos.filter((p) => 
  p.title.includes("phone")
);

// Map: transformar cada item
const cards = filtrados.map((p) => 
  <ProdutoCard key={p.id} product={p} />
);
```

---

## 🎯 O que aprender em seguida

- **Semana 14:** React Router para navegação entre múltiplas páginas
- **Semana 15:** Autenticação e login de usuários
- **Futura:** Context API para estado global, Redux, TypeScript

---

## 📝 Notas de Desenvolvimento

- **API Usada:** DummyJSON (https://dummyjson.com)
  - `GET /products?limit=30` → lista produtos
  - `GET /products/categories` → lista categorias
  
- **Padrão de Componente:** Cada arquivo = 1 componente
- **Nomeação:** camelCase para variáveis/funções, PascalCase para componentes
- **CSS:** Classes globais em App.css, reutilizadas nos componentes

---

**Última atualização:** Semana 13 (Etapa 2) completa
