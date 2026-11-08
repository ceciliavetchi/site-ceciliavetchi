import { ArrowDown, ArrowUpRight } from 'lucide-react';
import './projects.css';

const projects = [
  {
    id: 'recontar',
    category: 'PESQUISA INDEPENDENTE & DIREÇÃO CRIATIVA',
    title: 'RECONTAR.LAB — Segurança Financeira Feminina no Brasil',
    partnership: 'Em colaboração com a planejadora financeira Shel Nascimento (@shellnascimento)',
    role: 'Diretora Criativa e Pesquisadora',
    image: '/images/recontar-pesquisa.jpg',
    alt: 'Participante com uma folha da pesquisa sobre segurança financeira feminina e uma ecobag',
    paragraphs: [
      'O RECONTAR.LAB é um laboratório de pesquisa independente que nasceu para responder a uma pergunta fundamental: o que significa para uma mulher se sentir financeiramente segura no Brasil?',
      'Cocriado por mim, o projeto surge de um desejo profundo de colocar as mulheres no centro da discussão. Nosso objetivo é se apropriar de um assunto que é nosso. A história das mulheres foi contada por homens por muito tempo, agora queremos contar a nossa própria história. Recontar, na verdade.',
    ],
    link: null,
  },
  {
    id: 'vozes',
    category: 'LIVRO-REPORTAGEM & JORNALISMO POLÍTICO',
    title: 'Vozes do Silêncio (2022)',
    partnership: 'Desenvolvido em parceria com a jornalista Isabelle Rodrigues',
    role: 'Coautora',
    image: '/images/vozes-do-silencio-capa.jpg',
    alt: 'Exemplares do livro Vozes do Silêncio — As mulheres que não se calaram',
    paragraphs: [
      'Fruto de uma investigação iniciada durante a graduação em Jornalismo na ESPM Rio, o livro-reportagem retrata a trajetória de três assessoras de Marielle Franco que foram eleitas deputadas estaduais no mesmo ano do crime: Dani Monteiro, Mônica Francisco e Renata Souza. A obra registra como a coragem, a ocupação de espaços de poder e o recorte social transformam a história e a democracia no país.',
    ],
    link: { label: 'Saiba mais sobre o livro', href: 'https://www.editoramultifoco.com.br/shop/vozes-do-silencio-as-mulheres-que-nao-se-calaram-2480' },
  },
  {
    id: 'newsletter',
    category: 'ESCRITA AUTORIAL',
    title: 'Clube Insano (Substack)',
    partnership: null,
    role: 'DIREÇÃO CRITATIVA & ESCRITORA',
    image: '/images/clube-insano-logo.png',
    alt: 'Logo Clube Insano em letras verde-lima',
    paragraphs: [
      'A newsletter em que prometo sinceridade e onde compartilho as vozes (insanas) da minha cabeça. A plataforma funciona como um laboratório de escrita para mim e ponto de encontro com as pessoas. O meu Clube Insano combina crônicas, ensaios, textos analíticos e reflexivos sobre processo criativo, política, dinheiro e feminismo. Sempre',
      'É o meu espaço na internet, totalmente sem filtro, para compartilhar os nossos dilemas, discutir autonomia e criar pontes com os leitores por meio de reflexões profundas sobre o cotidiano.',
    ],
    link: { label: 'Assinar o Clube Insano', href: 'https://ceciliasantos.substack.com/' },
  },
];

export function Projects() {
  return <section className="projects-section section wrap" id="projetos" aria-labelledby="projects-title">
    <header className="projects-heading"><p className="eyebrow">02 / PROJETOS</p>
      <h2 id="projects-title">PROJETOS<span className="lime-period">.</span></h2>
      <p>pesquisa, investigação e narrativas autorais para transformar dados e reflexões em histórias que conectam.</p>
      <p className="projects-scroll">ROLE PARA EXPLORAR <ArrowDown size={18} aria-hidden="true" /></p>
    </header>
    <div className="projects-list">{projects.map(project => <article className={`project-panel project-panel-${project.id}`} key={project.id} aria-labelledby={`project-${project.id}-title`}>
      <figure className="project-media"><img src={project.image} alt={project.alt} loading="lazy" /></figure>
      <div className="project-details">
        <p className="eyebrow"><span>{project.category}</span></p>
        <h3 id={`project-${project.id}-title`}>{project.title}</h3>
        {project.partnership && <p className="project-partnership">{project.partnership}</p>}
        <p className="project-role">{project.role}</p>
        {project.paragraphs.map(paragraph => <p className="project-description" key={paragraph}>{paragraph}</p>)}
        {project.link && <a className={project.id === 'newsletter' ? 'button button-dark' : 'text-link'} href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} <ArrowUpRight size={20} aria-hidden="true" /></a>}
      </div>
    </article>)}</div>
  </section>;
}
