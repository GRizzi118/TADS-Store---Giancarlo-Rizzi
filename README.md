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
- CSS puro — estilização dos componentes
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
├── App.jsx               # Componente raiz — monta Layout + Vitrine
├── App.css               # Estilos globais da aplicação
└── components/
    ├── Layout.jsx        # Envolve children entre Cabeçalho e Rodapé
    ├── Cabecalho.jsx     # Topo da página com título e subtítulo
    ├── Rodape.jsx        # Rodapé com ano dinâmico
    ├── Vitrine.jsx       # Grid de produtos com filtros (Semana 13)
    ├── ProdutoCard.jsx   # Card individual de produto
    ├── Botao.jsx         # Botão reutilizável
    └── Selo.jsx          # Etiqueta de destaque (ex.: Frete Grátis)
```

---

## Funcionalidades por Semana

| Semana | Tema | Status |
|--------|------|--------|
| 12 | Componentização — Layout, Vitrine, ProdutoCard, Botao, Selo | ✅ Concluída |
| 13 | API real + Hooks (useState, useEffect) + Filtros dinâmicos | ✅ Concluída |
| 14 | React Router — múltiplas páginas | 🔜 Em breve |

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

