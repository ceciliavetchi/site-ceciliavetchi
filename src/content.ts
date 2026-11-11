// Substitua null apenas por URLs oficiais confirmadas. Nenhuma conta é presumida.
export const channels: Record<string, string | null> = {
  Substack: 'https://ceciliasantos.substack.com/',
  Instagram: 'https://www.instagram.com/cecilia.vetchi/',
  TikTok: 'https://www.tiktok.com/@cecilsv',
  Spotify: 'https://open.spotify.com/show/0V96xh3XqIrvf8KYCgJ9zQ?si=LbgMdp2zSbmHJqL6GIkKSg&utm_source=copy-link',
};

export type Article = {
  id: string;
  title: string;
  format: string;
  time: string;
  description: string;
  cover: string;
  href: string;
};

const newsletter = 'https://ceciliasantos.substack.com/';
const cyclesUrl = `${newsletter}p/historias-de-insanidade-43-511`;
const moneyUrl = `${newsletter}p/historias-de-insanidade-42`;
const talent: Article = {
  id: 'talento', title: 'Eu não tenho talento (e o que isso diz sobre mim)', format: 'ENSAIO', time: '5 min de leitura',
  cover: 'sem\ntalento?', href: newsletter,
  description: 'Uma investigação confessional sobre a ideia de dom, o peso da técnica e por que escrever é construir uma colcha de retalhos com o que a gente vive.',
};
const cycles: Article = {
  id: 'ciclos', title: 'Ciclos de 4 anos, democracia e projetos', format: 'NARRATIVAS', time: '6 min de leitura',
  cover: 'ciclos\nde 4 anos', href: cyclesUrl,
  description: 'Entre a memória da faculdade de jornalismo, o legado de Marielle Franco, a publicação do livro Vozes do Silêncio e a busca por segurança financeira feminina.',
};
const money: Article = {
  id: 'dinheiro-criatividade', title: 'Sobre dinheiro e criatividade', format: 'CRIATIVIDADE', time: '4 min de leitura',
  cover: 'dinheiro e\ncriatividade', href: moneyUrl,
  description: 'O que acontece quando a necessidade de pagar boletos encontra a urgência de criar coisas com propósito e significado.',
};

// Six texts from the former Narrativas and Criatividade selections, displayed together.
export const articles: Article[] = [
  talent,
  cycles,
  money,
  {
    id: 'diario', title: 'Diário 01 - um assunto todo nosso', format: 'AUTONOMIA FEMININA', time: '5 min de leitura',
    cover: 'diário 01', href: newsletter,
    description: 'Sobre resgate histórico, vivências compartilhadas entre mulheres e a construção da autonomia no dia a dia.',
  },
  {
    id: 'autonomia', title: 'Ter dinheiro é também poder escolher', format: 'AUTONOMIA FEMININA', time: '6 min de leitura',
    cover: 'dinheiro é\nescolha', href: `${newsletter}about`,
    description: 'Uma conversa necessária sobre segurança financeira para mulheres, direitos conquistados e a liberdade de tomada de decisão.',
  },
  {
    id: 'bets', title: 'A Copa do Mundo das Bets', format: 'COTIDIANO', time: '5 min de leitura',
    cover: 'a Copa\ndas Bets', href: `${newsletter}p/historias-de-insanidade-43`,
    description: 'Uma crônica afiada e confessional sobre a cultura das apostas digitais, comportamento e os vícios do nosso tempo.',
  },
];
