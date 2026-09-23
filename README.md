# Drimo Eat & Drink — Landing Page

Landing page institucional da Drimo Eat & Drink, em Dourados/MS. A aplicação é uma SPA responsiva, mobile-first e orientada a conversões para cardápio, delivery, reservas, WhatsApp, Instagram e localização.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 e CSS modular da interface
- Lucide React para ícones de interface
- Vitest + Testing Library para testes
- Tipografia Rische e fotografias oficiais em `src/assets/drimo`

## Executar localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador. Para testar a versão de produção localmente:

```bash
npm run build
npm run preview
```

No Windows PowerShell, use `npm.cmd run dev` se a política de execução do ambiente bloquear o comando `npm`.

## Scripts

```bash
npm run dev       # servidor de desenvolvimento com Vite
npm run build     # verificação TypeScript e build de produção
npm run lint      # ESLint
npm test          # testes unitários em modo CI
npm run test:watch
npm run preview   # serve o diretório dist após o build
```

## Conteúdo da página

A página reúne header sticky, hero, ações rápidas, nossa história, destaques do cardápio, pratos para compartilhar, programação semanal, delivery, Chef Diego, ambiente, galeria “Olhares da Drimo”, conexão com esporte, localização, FAQ, CTA final e footer.

Recursos de interface já incluídos:

- navegação por âncoras e menu mobile acessível;
- barra de ações mobile e botão flutuante do WhatsApp com ícone oficial;
- carousel automático na seção “Nossa história”;
- galeria responsiva com lightbox;
- FAQ expansível;
- iframe do Google Maps com endereço confirmado;
- preservação de parâmetros UTM e eventos de analytics sem provedor obrigatório;
- suporte a `prefers-reduced-motion`, textos alternativos e links externos com `noopener noreferrer`.

## Organização do código

```text
src/
├─ assets/drimo/       # logos, fontes Rische e fotos oficiais
├─ components/         # seções e componentes da landing page
├─ config/              # links, dados do restaurante, ações e assets
└─ lib/                 # UTMs, analytics e utilitários compartilhados
```

Os principais pontos de configuração são:

- `src/config/restaurant.ts`: nome, cidade, endereço, telefone, horários, mapa e canonical;
- `src/config/links.ts`: Goomer, WhatsApp, Instagram e mensagens pré-preenchidas;
- `src/config/assets.ts`: curadoria e associação das fotografias às seções;
- `src/config/weeklyActions.ts`: ações semanais, estados ativos e itens “coming soon”.

Informações voláteis devem ser alteradas nesses arquivos, e não diretamente nos componentes. Campos opcionais não confirmados — como horários e canonical — permanecem vazios e não são exibidos.

## Qualidade e validação

Antes de publicar, execute:

```bash
npm run build
npm run lint
npm test
```

O build gera a pasta `dist/`, que pode ser publicada em qualquer hospedagem compatível com uma SPA. Configure o servidor para redirecionar rotas desconhecidas para `index.html`.

## Publicação

O projeto está preparado para deploy estático. Após o build, publique o conteúdo de `dist/` e mantenha os links comerciais configurados em `src/config/links.ts`. Não há backend, checkout, carrinho ou sistema próprio de reservas neste projeto.
