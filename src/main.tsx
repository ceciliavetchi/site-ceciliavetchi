import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Asterisk, Menu, X, Headphones, Camera, Play, BookOpen, Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { articleSelections, channels } from './content';
import './styles.css';
import './hero.css';
import './writing.css';
import './about.css';
import './refinements.css';
import { Projects } from './projects';

type Detail = { eyebrow: string; title: string; content: ReactNode };
const nav = [['Sobre mim', 'sobre'], ['Clube Insano', 'clube-insano'], ['Projetos', 'projetos']];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<keyof typeof articleSelections>('Todos');
  const [detail, setDetail] = useState<Detail | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (detail) {
      trigger.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
      closeButton.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.current?.close();
      document.body.style.overflow = '';
      trigger.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [detail]);

  function channel(name: string) {
    if (channels[name]) {
      window.open(channels[name]!, '_blank', 'noopener,noreferrer');
      return;
    }
    setDetail({ eyebrow: 'CONEXÕES · PRÉVIA DO LAYOUT', title: `${name}, por aqui também.`, content: <><p>Este espaço está reservado para o canal oficial de Cecilia no {name}. O endereço será adicionado quando for confirmado.</p><p className="detail-note">Esta é uma demonstração visual. Não há integração ativa nem coleta de dados.</p></> });
  }


  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#" aria-label="Cecilia Vetchi, início">cecilia vetchi<span>.</span></a>
      <nav id="mobile-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="contact-nav header-contact" href="mailto:cecilia.vetchi@gmail.com" onClick={() => setMenuOpen(false)}>Vamos conversar <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="conteudo">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title" aria-label="storytelling e direção criativa">
            <span className="hero-title-line" aria-hidden="true">storytelling</span>
            <span className="hero-title-line" aria-hidden="true">e dire<span className="font-cedilla">c</span><span className="font-tilde">a</span>o</span>
            <span className="hero-title-line" aria-hidden="true">criativa</span>
          </h1>
          <p className="hero-intro">Escrevo para entender o mundo.<br />Crio para sentir. E tenho uma certeza: nada nos conecta mais do que uma boa história.</p>
          <a className="button button-dark" href="#sobre">Entre, fique à vontade! <ArrowDown size={20} /></a>
        </div>
        <div className="hero-art">
          <figure className="hero-photo"><img src="/images/cecilia-portrait.jpg" alt="Cecilia Vetchi, de óculos e roupa preta, sentada ao lado de uma pilha de livros" fetchPriority="high" /></figure>
          <div className="asterisk-stamp" aria-hidden="true"><img src="/images/creative-symbol.png" alt="" /></div>
          <div className="handwritten hero-note" aria-hidden="true">a vida não cabe numa coisa só</div>
        </div>
      </section>

      <div className="manifesto-strip" aria-label="Comunicação, narrativa e criatividade">
        <div className="marquee-track">{[0, 1].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {Array.from({length: 3}, () => ['COMUNICAÇÃO', 'NARRATIVA', 'CRIATIVIDADE']).flat().map((word, index) => <span className="marquee-item" key={index}>{word}<Asterisk aria-hidden="true" /></span>)}
        </div>)}</div>
      </div>

      <section className="section wrap writing" id="clube-insano" aria-labelledby="writing-title">
        <div className="section-top"><div><p className="eyebrow">01 / ESCRITA</p><h2 id="writing-title">CLUBE INSANO<span className="lime-period">.</span></h2></div><a className="text-link" href={channels.Substack!} target="_blank" rel="noopener noreferrer">Meu Substack <ArrowUpRight size={20} /></a></div>
        <div className="writing-toolbar"><p>minha newsletter no substack onde compartilho meu jeito de ver o mundo.</p><div className="filters" aria-label="Filtrar artigos">{(Object.keys(articleSelections) as (keyof typeof articleSelections)[]).map(label => <button key={label} aria-pressed={filter === label} className={filter === label ? 'filter active' : 'filter'} onClick={() => setFilter(label)}>{label}</button>)}</div></div>
        <div className="articles-grid" aria-live="polite">
          {articleSelections[filter].map((article, index) => <article className="article" key={article.id} data-category={filter.toLowerCase()}>
            <a className="article-open" href={article.href} target="_blank" rel="noopener noreferrer">
              <div className={`article-cover ${index % 2 === 0 ? 'paper' : 'acid'}`}>
                <span className="cover-label">{article.format}</span><span className="handwritten cover-writing">{article.cover}</span><Asterisk className="cover-star" strokeWidth={1.4} aria-hidden="true" />
                <span className="article-arrow"><ArrowUpRight size={22} aria-hidden="true" /></span>
              </div>
              <div className="article-meta"><span>{article.format}</span><span>{article.time}</span></div><h3>{article.title}</h3><p>{article.description}</p>
            </a>
          </article>)}
        </div>
      </section>

      <Projects />

      <section className="about-section" id="sobre" aria-labelledby="about-title">
        <div className="wrap about-grid">
          <div className="about-art">

            <img className="about-photo" src="/images/cecilia-caneca.png" alt="Cecilia Vetchi segurando uma caneca de cerâmica, com um livro equilibrado sobre a cabeça" loading="lazy" width="1023" height="1537" />
            <p className="handwritten about-photo-note">muitas formas de ser</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">03 / PRAZER, CECILIA :)</p>
            <h2 id="about-title"><span className="about-highlight">A curiosidade é o fio que une.</span></h2>
            <p>Desde que me entendo por gente, sou curiosa. Sempre quis saber o porquê de as coisas serem do jeito que são, nunca me conformei com um simples "porque sim". Gosto de ir além do raso, mergulhar fundo nos assuntos e ficar submersa até entender a essência.</p>
            <button className="text-link" onClick={() => setDetail({
              eyebrow: 'SOBRE MIM', title: 'Uma trajetória, muitas formas de ser.',
              content: <>
                <p>Entender o mundo é fundamental para mim, mas esse processo nunca acontece só de fora para dentro. Sinto a necessidade de me entender profundamente desde muito nova. Por isso, desde que aprendi a escrever, estou sempre rabiscando palavras e carregando um caderno para onde quer que eu vá.</p>
                <p>Falar, ouvir com atenção e escrever fazem parte de quem sou. Reuni tudo isso na escolha de cursar Jornalismo, uma decisão que ampliou meu repertório e transformou a minha forma ver o mundo. Aprendi que o recorte que damos a cada assunto é o coração da história que queremos contar.</p>
                <p>Hoje, trago essa escuta e olhar atento para projetos com propósito. Sou diretora criativa do RECONTAR.LAB, projeto de pesquisa independente em parceria com a planejadora financeira Shel Nascimento, no qual investigamos o que significa segurança financeira para as mulheres no Brasil. Sou também coautora do livro-reportagem Vozes do Silêncio (2022) e criadora da newsletter Clube Insano no Substack.</p>
                <p>Seja em ensaios, investigações jornalísticas ou projetos criativos, o meu olhar atento está sempre presente.</p>
                <p className="bio-question">Afinal, que história você quer contar?</p>
                <a className="text-link" href="mailto:cecilia.vetchi@gmail.com" onClick={() => setDetail(null)}>Vamos conversar.</a>
              </>,
            })}>Mais sobre mim <ArrowUpRight size={20} /></button>
          </div>
        </div>
      </section>

      <section className="section wrap connections" aria-labelledby="connections-title"><div className="section-top"><div><p className="eyebrow">04 / A CONVERSA CONTINUA</p><h2 id="connections-title">Por outros cantos<span className="lime-period">.</span></h2></div><p className="section-aside">Textos, bastidores, conversas.<br />Escolha seu jeito de acompanhar.</p></div><div className="channels-grid">{[{name:'Substack',icon:BookOpen,text:'Para ler com calma.'},{name:'Instagram',icon:Camera,text:'O cotidiano em imagens.'},{name:'TikTok',icon:Play,text:'Ideias em movimento.'},{name:'Spotify',icon:Headphones,text:'Conversas para levar junto.'}].map(({name,icon:Icon,text}) => <button className="channel-card" key={name} onClick={() => channel(name)}><div><Icon size={24} strokeWidth={1.5}/><ArrowUpRight size={20}/></div><h3>{name}</h3><p>{text}</p></button>)}</div></section>

      <section className="collab-section wrap" id="colabs" aria-labelledby="collab-title"><div><p className="eyebrow">05 / VAMOS CONVERSAR</p><h2 id="collab-title">Vamos criar<br /><span className="handwritten">algo juntas?</span></h2><p>Histórias, conteúdos e projetos que fazem sentido.<br />O próximo encontro pode começar aqui.</p></div><a className="collab-cta" href="mailto:cecilia.vetchi@gmail.com" aria-label="Conversar sobre uma colaboração"><ArrowUpRight strokeWidth={1} /></a></section>
    </main>

    <footer className="wrap site-footer"><div><a className="wordmark" href="#">cecilia vetchi<span>.</span></a><p>conto historias pra entender o mundo</p></div><div className="footer-links">{Object.keys(channels).map(name => <button key={name} onClick={() => channel(name)}>{name} <ArrowUpRight size={13}/></button>)}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Cecilia Vetchi</span><div className="creator-credit"><span>Criado por</span><span className="creator-brand">maju ros<span aria-hidden="true">.</span></span></div><a href="#">Voltar ao início ↑</a></div></footer>
    <div className="preview-badge"><Check size={13}/><span>Prévia de design · conteúdo ilustrativo</span></div>

    <dialog ref={dialog} className="detail-dialog" onCancel={() => setDetail(null)} onClick={event => { if(event.target === event.currentTarget) setDetail(null); }} aria-labelledby="detail-title"><div className="detail-inner"><button ref={closeButton} className="dialog-close" onClick={() => setDetail(null)} aria-label="Fechar"><X /></button>{detail && <><p className="eyebrow">{detail.eyebrow}</p><h2 id="detail-title">{detail.title}</h2><div className="detail-body">{detail.content}</div></>}</div></dialog>
  </>;
}

createRoot(document.getElementById('root')!).render(<App />);
