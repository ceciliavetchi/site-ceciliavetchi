// Substitua null apenas por URLs oficiais confirmadas. Nenhuma conta é presumida.
export const channels: Record<string, string | null> = {
  Substack: 'https://substack.com/@cecilsv',
  Instagram: 'https://www.instagram.com/cecilia.vetchi/',
  TikTok: 'https://www.tiktok.com/@cecilsv',
  YouTube: 'https://www.youtube.com/@cecilia.vetchi',
  Spotify: null,
};

export const articles = [
  { id: 'autonomia', category: 'Mulheres', format: 'ENSAIO', title: 'Ter dinheiro é também poder escolher.', description: 'Uma conversa sobre autonomia, escolhas e os caminhos que construímos juntas.', time: '6 min de leitura', visual: 'acid', cover: 'a liberdade\ntambém é\nfinanceira.', paragraphs: ['O que muda quando uma mulher pode escolher por si? Esta é uma proposta de pauta para abrir conversas sobre dinheiro, trabalho e independência.', 'Neste espaço entrarão os artigos publicados por Cecilia no Substack, com título, resumo, imagem e acesso à publicação original.'] },
  { id: 'tempo', category: 'Cotidiano', format: 'CRÔNICA', title: 'Há coisas que só o tempo das mãos ensina.', description: 'Entre uma página em branco e um pedaço de barro, um outro ritmo possível.', time: '4 min de leitura', visual: 'photo', cover: '', paragraphs: ['A cerâmica convida a olhar para o processo. O gesto, a espera, o inesperado. Uma proposta de crônica sobre os encontros entre o fazer manual e a escrita.', 'Este texto foi criado apenas para demonstrar a experiência de leitura. Os textos originais serão definidos com Cecilia.'] },
  { id: 'reinventar', category: 'Mulheres', format: 'REFLEXÕES', title: 'Uma mulher pode ser muitas. Ainda bem.', description: 'Sobre deixar de caber em uma definição — e começar a se reconhecer.', time: '5 min de leitura', visual: 'paper', cover: 'e se a gente\npudesse ser\nmuitas?', paragraphs: ['Jornalista, ceramista, mulher. Este espaço propõe conversas sobre a multiplicidade da experiência feminina, sem limitar uma trajetória a um único papel.', 'Título e resumo são sugestões editoriais de layout, não publicações ou declarações reais de Cecilia.'] },
];

export type Article = (typeof articles)[number];
