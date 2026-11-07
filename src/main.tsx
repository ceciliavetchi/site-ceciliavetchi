import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Asterisk, Menu, X, Plus, Headphones, Camera, Video, Play, BookOpen, Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { articles, channels } from './content';
import './styles.css';
import './hero.css';

type Detail = { eyebrow: string; title: string; content: ReactNode };
const nav = [['Sobre mim', 'sobre'], ['Clube Insano', 'clube-insano'], ['Projetos', 'projetos'], ['Bora conversar?', 'colabs']];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('Todos');
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

  function contact() {
    setDetail({ eyebrow: 'COLABORAÇÕES', title: 'Boas ideias começam com uma conversa.', content: <><p>Jornalismo, conteúdo, cerâmica e projetos sobre mulheres e autonomia: um espaço aberto a encontros e parcerias.</p><p>O contato profissional será incluído após a confirmação de Cecilia.</p><p className="detail-note">Prévia de layout · Nenhuma mensagem é enviada por este protótipo.</p></> });
  }

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#" aria-label="Cecilia Vetchi, início">cecilia vetchi<span>.</span></a>
      <nav id="mobile-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
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

      <div className="manifesto-strip" aria-label="Palavras que atravessam este espaço"><div className="wrap strip-inner"><span>JORNALISMO</span><Asterisk /><span>FEITO À MÃO</span><Asterisk /><span>AUTONOMIA FEMININA</span><Asterisk /><span>CONVERSAS QUE IMPORTAM</span><Asterisk /></div></div>

      <section className="section wrap writing" id="escrita" aria-labelledby="writing-title">
        <div className="section-top"><div><p className="eyebrow">01 / PALAVRAS QUE FICAM</p><h2 id="writing-title">Daqui, eu escrevo<span className="lime-period">.</span></h2></div><button className="text-link" onClick={() => channel('Substack')}>Meu Substack <ArrowUpRight size={20} /></button></div>
        <div className="writing-toolbar"><p>Um olhar atento para o cotidiano, as mulheres e o que nos move.</p><div className="filters" aria-label="Filtrar artigos">{['Todos', 'Mulheres', 'Cotidiano'].map(label => <button key={label} aria-pressed={filter === label} className={filter === label ? 'filter active' : 'filter'} onClick={() => setFilter(label)}>{label}</button>)}</div></div>
        <div className="articles-grid" aria-live="polite">
          {articles.filter(article => filter === 'Todos' || article.category === filter).map(article => <article className="article" key={article.id}>
            <button className="article-open" onClick={() => setDetail({ eyebrow: `${article.format} · CONTEÚDO DEMONSTRATIVO`, title: article.title, content: <>{article.paragraphs.map(p => <p key={p}>{p}</p>)}<button className="button button-dark" onClick={() => channel('Substack')}>Conhecer o Substack <ArrowUpRight size={17} /></button></> })} aria-label={`Abrir prévia: ${article.title}`}>
              <div className={`article-cover ${article.visual}`}>
                {article.visual === 'photo' ? <img src="/images/pottery-process.jpg" alt="Mãos trabalhando o barro, imagem ilustrativa" loading="lazy" /> : <><span className="cover-label">{article.visual === 'acid' ? 'UM CONVITE À AUTONOMIA' : 'ANOTAÇÕES SOBRE EXISTIR'}</span><span className="handwritten cover-writing">{article.cover}</span><Asterisk className="cover-star" strokeWidth={1.4} /></>}
                <span className="article-arrow"><ArrowUpRight size={22} /></span>
              </div>
              <div className="article-meta"><span>{article.format}</span><span>{article.time}</span></div><h3>{article.title}</h3><p>{article.description}</p>
            </button>
          </article>)}
        </div>
        <p className="demo-note">Propostas de pautas para visualizar o layout. Os artigos originais entrarão aqui.</p>
      </section>

      <section className="project-section" id="projetos" aria-labelledby="project-title">
        <div className="wrap project-grid"><div className="project-poster" id="clube-insano"><span className="eyebrow">CECILIA VETCHI + SHELL NASCIMENTO</span><div className="handwritten club-title">clube<br /><span>insano</span></div><div className="poster-bottom"><span>MULHERES &<br />INDEPENDÊNCIA FINANCEIRA</span><Asterisk size={66} strokeWidth={1.2} /></div></div>
          <div className="project-copy"><p className="eyebrow">02 / JUNTAS, MAIS LONGE</p><h2 id="project-title">A liberdade também<br />passa pelo dinheiro.</h2><p>Um projeto de Cecilia Vetchi com a planejadora Shell Nascimento, dedicado às mulheres e à construção da sua independência financeira.</p><p>Conversas que aproximam informação, autonomia e a possibilidade de escolher o próprio caminho.</p><button className="button button-lime" onClick={() => setDetail({ eyebrow: 'CECILIA VETCHI + SHELL NASCIMENTO', title: 'Mulheres, dinheiro e autonomia.', content: <><p>Um projeto que reúne o olhar do jornalismo de Cecilia e o planejamento de Shell Nascimento para conversar sobre mulheres e independência financeira.</p><p>Neste espaço poderão entrar os conteúdos, encontros e episódios oficiais do projeto.</p><p className="detail-note">“Clube Insano” é uma aplicação visual sugerida a partir do anexo. Nome, identidade final, formatos e links ainda precisam ser confirmados.</p></> })}>Conheça o projeto <ArrowUpRight size={18} /></button><span className="project-footnote">Identidade sugerida a partir da referência enviada.</span></div></div>
      </section>

      <section className="section wrap ceramics" id="ceramica" aria-labelledby="ceramics-title">
        <div className="section-top"><div><p className="eyebrow">03 / PENSAR COM AS MÃOS</p><h2 id="ceramics-title">O tempo do barro<span className="lime-period">.</span></h2></div><p className="section-aside">Forma, textura e a beleza<br />de deixar as coisas acontecerem.</p></div>
        <div className="ceramic-grid"><button className="ceramic-piece ceramic-main" onClick={() => setDetail({ eyebrow: 'CERÂMICA · GALERIA DE REFERÊNCIA', title: 'Formas para o cotidiano.', content: <><img className="detail-image" src="/images/ceramic-vases.jpg" alt="Vasos de referência em tons naturais" /><p>A galeria receberá as peças de Cecilia, com fotografias, materiais, dimensões e histórias do processo.</p><p className="detail-note">Fotografia ilustrativa de Chloe Bolton / Unsplash. Não representa obra de Cecilia.</p></> })}><img src="/images/ceramic-vases.jpg" alt="Imagem ilustrativa de vasos em tons naturais, não são peças de Cecilia" loading="lazy" /><div className="piece-caption"><div><span className="eyebrow">FORMAS & TEXTURAS</span><h3>O extraordinário do simples.</h3></div><span className="round-arrow"><Plus /></span></div></button>
          <button className="ceramic-piece ceramic-process" onClick={() => setDetail({ eyebrow: 'CERÂMICA · PROCESSO', title: 'Entre as mãos e o tempo.', content: <><img className="detail-image" src="/images/pottery-hands.jpg" alt="Referência de trabalho em torno de cerâmica" /><p>Um lugar para compartilhar as etapas de criação: do primeiro contato com o barro à peça final.</p><p className="detail-note">Fotografia ilustrativa de Jonathan Cosens Photography / Unsplash.</p></> })}><div className="process-image"><img src="/images/pottery-hands.jpg" alt="Detalhe ilustrativo do processo de modelagem no torno" loading="lazy" /><span className="process-sticker handwritten">feito<br />devagar.</span></div><div className="piece-caption"><div><span className="eyebrow">POR DENTRO DO ATELIÊ</span><h3>Antes de ser peça, é processo.</h3></div><span className="round-arrow"><Plus /></span></div></button></div>
        <div className="ceramics-bottom"><p>Uma outra maneira de contar histórias.</p><button className="text-link" onClick={() => channel('Instagram')}>Acompanhe no Instagram <ArrowUpRight size={20} /></button></div><p className="demo-note">Galeria ilustrativa. As fotografias serão substituídas pelas peças e pelo ateliê de Cecilia.</p>
      </section>

      <section className="about-section" id="sobre" aria-labelledby="about-title"><div className="wrap about-grid"><div className="about-art"><span className="eyebrow">MUITAS FORMAS DE SER.</span><div className="handwritten">mulher.<br />jornalista.<br /><span>ceramista.</span></div><Asterisk size={70} strokeWidth={1.3} /><span className="about-signature">cecilia vetchi</span></div><div className="about-copy"><p className="eyebrow">04 / PRAZER, CECILIA</p><h2 id="about-title">A curiosidade<br />é o fio que une.</h2><p>Jornalista e ceramista, Cecilia Vetchi reúne a palavra e o fazer manual em uma trajetória de múltiplos interesses.</p><p>Ao lado de Shell Nascimento, também desenvolve um projeto voltado às mulheres e à sua independência financeira.</p><p className="about-pullquote">Entre histórias, ideias e barro,<br />há sempre algo tomando forma.</p><button className="text-link" onClick={() => setDetail({ eyebrow: 'BIOGRAFIA · TEXTO INICIAL', title: 'Uma trajetória, muitos caminhos.', content: <><p>Cecilia Vetchi é jornalista e ceramista. Seus projetos incluem uma iniciativa com a planejadora Shell Nascimento, voltada às mulheres e à sua independência financeira.</p><p>A biografia completa poderá reunir sua formação, trajetória profissional, publicações e exposições, a partir das informações e fotografias aprovadas por Cecilia.</p><p className="detail-note">Texto inicial baseado nas informações fornecidas. Sem currículo ou realizações presumidas.</p></> })}>Mais sobre mim <ArrowUpRight size={20} /></button></div></div></section>

      <section className="section wrap connections" aria-labelledby="connections-title"><div className="section-top"><div><p className="eyebrow">05 / A CONVERSA CONTINUA</p><h2 id="connections-title">Por outros cantos<span className="lime-period">.</span></h2></div><p className="section-aside">Textos, bastidores, conversas.<br />Escolha seu jeito de acompanhar.</p></div><div className="channels-grid">{[{name:'Substack',icon:BookOpen,text:'Para ler com calma.'},{name:'Instagram',icon:Camera,text:'O cotidiano em imagens.'},{name:'TikTok',icon:Play,text:'Ideias em movimento.'},{name:'YouTube',icon:Video,text:'Histórias em outras telas.'},{name:'Spotify',icon:Headphones,text:'Conversas para levar junto.'}].map(({name,icon:Icon,text}) => <button className="channel-card" key={name} onClick={() => channel(name)}><div><Icon size={24} strokeWidth={1.5}/><ArrowUpRight size={20}/></div><h3>{name}</h3><p>{text}</p></button>)}</div></section>

      <section className="collab-section wrap" id="colabs" aria-labelledby="collab-title"><div><p className="eyebrow">ENCONTROS QUE VIRAM POSSIBILIDADES</p><h2 id="collab-title">Vamos criar<br /><span className="handwritten">algo juntas?</span></h2><p>Histórias, conteúdos e projetos que fazem sentido.<br />O próximo encontro pode começar aqui.</p></div><button className="collab-cta" onClick={contact} aria-label="Conversar sobre uma colaboração"><ArrowUpRight strokeWidth={1} /></button></section>
    </main>

    <footer className="wrap site-footer"><div><a className="wordmark" href="#">cecilia vetchi<span>.</span></a><p>Palavras, barro & liberdade.</p></div><div className="footer-links">{Object.keys(channels).map(name => <button key={name} onClick={() => channel(name)}>{name} <ArrowUpRight size={13}/></button>)}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Cecilia Vetchi</span><div className="creator-credit"><span>Criado por</span><span className="creator-brand">maju ros<span aria-hidden="true">.</span></span></div><a href="#">Voltar ao início ↑</a></div></footer>
    <div className="preview-badge"><Check size={13}/><span>Prévia de design · conteúdo ilustrativo</span></div>

    <dialog ref={dialog} className="detail-dialog" onCancel={() => setDetail(null)} onClick={event => { if(event.target === event.currentTarget) setDetail(null); }} aria-labelledby="detail-title"><div className="detail-inner"><button ref={closeButton} className="dialog-close" onClick={() => setDetail(null)} aria-label="Fechar"><X /></button>{detail && <><p className="eyebrow">{detail.eyebrow}</p><h2 id="detail-title">{detail.title}</h2><div className="detail-body">{detail.content}</div></>}</div></dialog>
  </>;
}

createRoot(document.getElementById('root')!).render(<App />);
