# Cecilia Vetchi

Site em React, TypeScript e Vite. O código editável está na raiz deste repositório; o ZIP original permanece preservado.

## Desenvolvimento

Requer Node.js 22.12+ ou 24+ e npm.

```sh
npm ci
npm run dev
```

## Build e publicação manual

```sh
npm run build
npm run preview
```

A pasta `dist` contém o site estático. Para atualizar a hospedagem, envie o conteúdo dessa pasta ao seu projeto estático existente. Gerar o build não publica o site.

## Identidade e conteúdo

Abertura conforme a proposta aprovada: título reto, três sublinhados verdes, retrato original, símbolo no círculo verde, tarja diagonal, botão e menu com links internos. A seção de escrita apresenta a newsletter Clube Insano, com seleções próprias para Todos, Narrativas e Criatividade, links diretos ao Substack e letreiro contínuo com suporte à preferência por movimento reduzido. A seção Sobre mim usa a foto original com caneca e tarja, a apresentação revisada e a biografia completa na janela Mais sobre mim. A seção Projetos unifica pesquisa, livro-reportagem e newsletter em três painéis verticais, com as imagens originais enviadas e os links aprovados. As demais seções mantêm o conteúdo demonstrativo anterior.

A fonte ES Build TRIAL Bold foi fornecida pela usuária para o teste visual. O arquivo não inclui ç e ã; os acentos do título são compostos visualmente em CSS. Para publicação comercial, usar a fonte com a licença e os caracteres apropriados. DM Sans e Caveat Brush são servidas localmente, com suas licenças OFL em `public/fonts`.

A foto e o símbolo originais enviados ao GitHub estão incorporados em `public/images`.

## Contato por e-mail

Os botões Vamos conversar, na navegação, na biografia e no bloco final, abrem a mesma janela de contato. Ela oferece o e-mail `cecilia.vetchi@gmail.com` e o Instagram Direct `https://ig.me/m/cecilia.vetchi`. O visitante escolhe o canal. Não há formulário ou serviço de envio no site.

## Publicação estática gratuita

O conteúdo da pasta `dist` pode ser hospedado no Cloudflare Pages por upload direto. O site não depende do Netlify. Consulte `downloads/PUBLICAR-NO-CLOUDFLARE.md`.
