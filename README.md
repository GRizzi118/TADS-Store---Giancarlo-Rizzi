Description:
🛒 TADS Store - Loja virtual em React com autenticação, 
rotas protegidas e integração com API. Projeto integrador 
das disciplinas de Desenvolvimento Front-end.

Topics:
react, javascript, vite, e-commerce, routing, authentication, 
context-api, hooks, responsive-design



# 🛒 TADS Store

**Projeto Integrador — Desenvolvimento Front-end**
Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) — IFES
Aluno: **Giancarlo Mercês Rizzi**

---

## Sobre o Projeto

A **TADS Store** é uma loja virtual (e-commerce) construída em React, desenvolvida ao longo de semanas como projeto integrador da disciplina de Desenvolvimento Front-end. Cada semana adiciona uma nova camada de funcionalidades à aplicação.

---

## Tecnologias

- [React](https://react.dev/) — biblioteca de interface
- [Vite](https://vite.dev/) — bundler e servidor de desenvolvimento
- [CSS puro] — estilização dos componentes
- [DummyJSON](https://dummyjson.com/) — API para dados de produtos

---

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Estrutura de Componentes

```
src/
├── App.jsx                          # Rotas principais (públicas + protegidas)
├── App.css                          # Estilos globais da aplicação
├── main.jsx                         # Entry point com AuthProvider (Semana 15)
├── contexts/
│   └── AuthContext.jsx              # Context global de autenticação (Semana 15)
├── components/
│   ├── Layout.jsx                   # Envolve children entre Cabeçalho e Rodapé
│   ├── Cabecalho.jsx                # Header com controle Entrar/Sair (Semana 15)
│   ├── Rodape.jsx                   # Rodapé com ano dinâmico
│   ├── Vitrine.jsx                  # Grid de produtos com filtros (Semana 13)
│   ├── ProdutoCard.jsx              # Card individual de produto
│   ├── RotaPrivada.jsx              # Wrapper para rotas protegidas (Semana 15)
│   ├── Botao.jsx                    # Botão reutilizável
│   └── Selo.jsx                     # Etiqueta de destaque (ex.: Frete Grátis)
└── pages/
    ├── Home.jsx                     # Página inicial com Vitrine (pública)
    ├── Detalhe.jsx                  # Detalhe do produto (pública)
    ├── Login.jsx                    # Formulário de login (Semana 15)
    ├── MinhaConta.jsx               # Área protegida (Semana 15)
    ├── Carrinho.jsx                 # Carrinho protegido (Semana 15)
    ├── Sobre.jsx                    # Página sobre
    └── NaoEncontrado.jsx            # Página 404 (rota catch-all)
```

---

## Funcionalidades por Semana

| Semana | Tema | Status |
|--------|------|--------|
| 12 | Componentização — Layout, Vitrine, ProdutoCard, Botao, Selo | ✅ Concluída |
| 13 | API real + Hooks (useState, useEffect) + Filtros dinâmicos | ✅ Concluída |
| 14 | React Router — múltiplas páginas (SPA) | ✅ Concluída |
| 15 | Autenticação e rotas protegidas — Projeto Final (Etapa 4) | ✅ Concluída |

---

## Credenciais de Teste

Para acessar as áreas protegidas (Minha Conta, Carrinho), use:
```
Usuário: aluno
Senha:   1234
```

---

## Conceitos Aplicados

### Semana 12
- **Componentização** — um componente por arquivo, responsabilidade única
- **Props** — dados passados entre componentes (`titulo`, `preco`, `freteGratis` …)
- **`.map()` com `key`** — renderização de lista de produtos
- **Renderização condicional** — `{freteGratis && <Selo />}` exibe o selo apenas nos produtos elegíveis
- **`toLocaleString("pt-BR", { style: "currency" })`** — formatação de moeda brasileira
- **Grid responsivo** — `repeat(auto-fit, minmax(180px, 1fr))` adapta colunas ao tamanho da tela

### Semana 13
- **`useState`** — guardar dados que mudam entre renders (produtos, busca, categoria, carregamento, erro)
- **`useEffect`** — executar código quando componente monta e buscar dados da API
- **Fetch API** — requisições HTTP assíncronas com `.then()` e `.catch()`
- **`.filter()`** — criar lista derivada com múltiplas condições (busca + categoria)
- **Inputs controlados** — sincronizar estado com `<input>` e `<select>`
- **Renderização condicional por estado** — mostrar "Carregando...", erro ou produtos
- **Integração com API REST** — consumir dados da DummyJSON em tempo real

### Semana 14
- **React Router DOM** — instalação e configuração do `BrowserRouter` no `main.jsx`
- **Rotas declarativas** — `<Routes>` e `<Route>` para mapear URLs a componentes
- **`useParams`** — capturar parâmetros dinâmicos da URL (`/detalhe/:id`)
- **`useNavigate`** — navegação programática (botão Voltar)
- **`Link`** — navegação sem recarregar a página
- **Página 404** — rota `path="*"` para URLs não encontradas
- **Separação em páginas** — componentes `Home`, `Detalhe`, `Sobre` e `NotFound` em `src/pages/`
- **Navegação SPA completa** — fluxo de usuário sem recarregar a página

### Semana 15
- **Context API** — criação de `AuthContext.jsx` para estado global de autenticação
- **`useState` com lazy initialization** — `useState(() => localStorage.getItem("logado") === "true")` para persistência da sessão
- **`localStorage`** — guardar estado de login do usuário para permanecer autenticado ao recarregar a página
- **Formulários controlados** — componente `Login.jsx` com `useState` para usuário e senha sincronizados com inputs
- **Rotas protegidas** — componente `RotaPrivada.jsx` que bloqueia acesso e redireciona ao login
- **`useAuth` hook customizado** — atalho para acessar contexto de autenticação em qualquer componente (`useContext`)
- **Redirecionamento condicional** — componente `<Navigate to="/login" />` para usuários não autenticados
- **Logout com limpeza de estado** — remover sessão do localStorage e resetar estado de autenticação
- **Controle de visualização** — mostrar/esconder elementos (botão "Entrar" vs "Sair") conforme autenticação
- **Integração completa** — unir as 4 etapas (componentes, hooks/API, rotas, autenticação) em uma aplicação funcional

