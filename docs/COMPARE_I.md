# Comparação: Tecboard vs ConditionalRender

## 📊 Resumo das Diferenças Principais

### **TECBOARD** tem as seguintes funcionalidades a mais:

---

## 1. **Ferramentas de Desenvolvimento**

### ESLint Configuration
- **Tecboard**: ✅ Possui arquivo `eslint.config.js` completo
- **ConditionalRender**: ❌ Não possui

**O que inclui:**
- Configuração flat config do ESLint
- Plugins para React Hooks (`eslint-plugin-react-hooks`)
- Plugins para React Refresh (`eslint-plugin-react-refresh`)
- Regras customizadas (ex: `no-unused-vars`)
- Integração com globals do navegador

### Dependências de Desenvolvimento
**Tecboard tem 9 devDependencies:**
- @eslint/js
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- vite

**ConditionalRender tem apenas 2 devDependencies:**
- @vitejs/plugin-react
- vite

---

## 2. **TypeScript Support**
- **Tecboard**: ✅ Inclui `@types/react` e `@types/react-dom` para suporte a TypeScript
- **ConditionalRender**: ❌ Nenhum suporte a TypeScript

---

## 3. **Scripts NPM**
**Tecboard:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

**ConditionalRender:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

**Diferença**: Tecboard tem `lint` (ESLint), ConditionalRender tem `test` (vazio).

---

## 4. **Estrutura de Arquivo de Importação**
**Tecboard (mais moderno):**
```javascript
// src/main.jsx
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
```
Usa destructuring direto de módulos.

**ConditionalRender (mais clássico):**
```javascript
// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
```
Importa módulos inteiros.

---

## 5. **Estrutura de Pasta**
**Tecboard:**
```
tecboard/
├── src/
│   ├── main.jsx
│   ├── Index.jsx
│   ├── Index.css
│   ├── index.css
│   ├── assets/
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   └── hero.png
│   └── components/
│       └── Index/
│           └── index.jsx
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── vite.config.js
├── eslint.config.js
└── README.md
```

**ConditionalRender:**
```
conditionalRender/
├── Index/
│   └── Index.jsx
├── global.css
├── index.html
├── index.jsx
└── package.json
```

**Diferença**: Tecboard tem organização profissional com `src/`, `public/`, `assets/`, e `components/`. ConditionalRender é muito mais simples e linear.

---

## 6. **Arquivos de Configuração**
- **Tecboard**: ✅ Possui `vite.config.js`, `eslint.config.js`, `README.md`
- **ConditionalRender**: ❌ Não possui estes arquivos

---

## 7. **Metadata do Projeto**
**Tecboard:**
```json
"name": "tecboard",
"private": true,
"version": "0.0.0",
"type": "module"
```

**ConditionalRender:**
```json
"name": "conditionalrender",
"version": "1.0.0",
"description": "Aprendendo renderização condicional",
"main": "index.jsx",
"author": "bigois",
"license": "ISC"
```

---

## 8. **Conteúdo e Exemplos**
- **Tecboard**: Projeto robusto com múltiplos exemplos, ícones SVG, imagens, demonstração de counter com assets
- **ConditionalRender**: Projeto simples focado em renderização condicional (ternário e if/else)

---

## 📋 Resumo Executivo

| Aspecto | Tecboard | ConditionalRender |
|--------|----------|------------------|
| ESLint | ✅ Sim | ❌ Não |
| TypeScript | ✅ Sim | ❌ Não |
| Estrutura | ✅ Profissional | ❌ Simples |
| DevDependencies | 9 | 2 |
| Lint Script | ✅ Sim | ❌ Não |
| Assets | ✅ Múltiplos | ❌ Não |
| Documentação | ✅ README.md | ❌ Não |
| Complexidade | Alta | Baixa |

**Conclusão**: **Tecboard** é um projeto mais maduro, com práticas profissionais de desenvolvimento (ESLint, TypeScript, estrutura organizada), enquanto **ConditionalRender** é um projeto educacional simples focado em conceitos básicos de React.
