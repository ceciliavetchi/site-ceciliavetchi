# Receber as mensagens do site

1. No painel do seu site no Netlify, abra a área **Forms**. Se a detecção de formulários estiver desativada, ative-a.
2. Baixe `cecilia-site-netlify.zip`, extraia e envie a pasta `dist` ao deploy manual do mesmo site. Se você ativou a detecção depois do último deploy, envie novamente a pasta.
3. Depois que o deploy terminar, confira que o formulário **contato** aparece em Forms.
4. Nas configurações de notificações de envio de formulário, adicione uma notificação por e-mail para **cecilia.vetchi@gmail.com**, associada ao formulário contato.
5. Abra o site publicado e envie uma mensagem de teste. Confira a submissão na área Forms e a chegada do e-mail, incluindo a pasta de spam.

Se o formulário não aparecer, confirme que a detecção está habilitada e faça um novo deploy. Se a submissão aparecer em Forms mas não chegar ao Gmail, confira a configuração da notificação. Os limites e a disponibilidade do serviço dependem do plano vigente da sua conta Netlify.

Os testes locais verificaram validação, conteúdo enviado, mensagens de erro/sucesso, acessibilidade da janela e layout. Não enviaram e-mails reais. A publicação e a notificação ainda precisam ser confirmadas na sua conta.
