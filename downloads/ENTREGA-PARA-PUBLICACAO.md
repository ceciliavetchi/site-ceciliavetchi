# Entrega para publicação — Cecilia Vetchi

## Arquivos

O ZIP cecilia-ENTREGA-COMPLETA.zip contém a pasta site-cecilia com código-fonte, imagens e fontes em public, arquivos de dependências e configuração, instruções, e dist pronto para hospedagem estática. Não contém node_modules ou credenciais.

## Desenvolver e gerar o site

Requer Node.js 22.12+ ou 24+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Publique o conteúdo de dist na raiz do site. Não publique a pasta src ou o ZIP antigo de origem. É possível usar Cloudflare Pages, Netlify ou outra hospedagem estática; não há backend, formulário ou variável secreta necessária.

## Contato aprovado

Os botões do topo e do bloco final, e o botão na biografia, abrem a mesma janela de contato com os links:
- E-mail: mailto:cecilia.vetchi@gmail.com
- Instagram Direct: https://ig.me/m/cecilia.vetchi

O e-mail depende do aplicativo do visitante; o Instagram pode exigir login. Não há envio de formulário pelo site ou dependência de Netlify Forms/Formspree.

## Validação

Build TypeScript/Vite concluído. Os testes no Chromium verificaram os dois acionadores principais, a transição da biografia para contato, os endereços dos links, fechamento por X e Escape, restauração do foco e ausência de overflow nas larguras 320, 375, 390, 760, 768, 1024 e 1440 pixels. Não foram enviadas mensagens reais. Os links do Spotify usam o endereço oficial informado pela usuária.

A versão TRIAL da fonte ES Build não inclui ç e ã; os acentos do título são compostos em CSS, conforme documentado no projeto. As fontes DM Sans e Caveat Brush incluem as licenças OFL.
