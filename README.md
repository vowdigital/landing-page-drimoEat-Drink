# Drimo Eat & Drink — Landing Page

Landing page institucional da Drimo Eat & Drink, construída como uma SPA mobile-first com React, Vite, TypeScript, TailwindCSS e Lucide React.

## Desenvolvimento

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

O servidor local fica disponível em `http://localhost:5173`.

## Scripts

```bash
npm run build   # verificação TypeScript + build de produção
npm run lint    # ESLint
npm test        # testes unitários com Vitest
```

## Estrutura

- `src/components`: seções e componentes da landing page.
- `src/config`: links, dados do restaurante e curadoria de assets.
- `src/assets/drimo`: logo, fonte Rische e fotografias oficiais.
- `src/lib`: tracking, UTMs e utilitários compartilhados.

Informações ainda não confirmadas, como endereço, horários, mapa e canonical, permanecem opcionais e não são exibidas enquanto não forem preenchidas em `src/config/restaurant.ts`.
