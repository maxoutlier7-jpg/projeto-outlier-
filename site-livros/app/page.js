const books = [
  {
    kicker: "LIVRO I",
    title: "A DECISÃO",
    subtitle: "Pare de esperar o momento certo.",
    copy: "Um livro para desmontar a inércia, recuperar direção e transformar intenção em decisão concreta.",
    accent: "01"
  },
  {
    kicker: "LIVRO II",
    title: "O RITMO",
    subtitle: "Disciplina para os dias comuns.",
    copy: "Um sistema prático para agir sem depender de motivação, reduzir fricção e criar consistência.",
    accent: "02"
  },
  {
    kicker: "LIVRO III",
    title: "A CONSTRUÇÃO",
    subtitle: "Execução que vira projeto de vida.",
    copy: "Como transformar constância em identidade, trabalho, dinheiro e uma vida construída com intenção.",
    accent: "03"
  }
];

const checkoutUrl = process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL || "#oferta";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">MODO AÇÃO</a>
        <nav>
          <a href="#trilogia">Trilogia</a>
          <a href="#metodo">Método</a>
          <a className="navCta" href="#oferta">Quero a coleção</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="eyebrow">TRILOGIA ORIGINAL • DESENVOLVIMENTO PESSOAL</div>
        <h1>Motivação passa.<br/><span>Sistema fica.</span></h1>
        <p className="lead">
          Três livros para transformar clareza em ação, ação em consistência
          e consistência em construção de vida.
        </p>
        <div className="heroActions">
          <a className="primary" href="#oferta">Conhecer a coleção</a>
          <a className="secondary" href="#trilogia">Ver os três livros</a>
        </div>
        <div className="proofGrid">
          <div><strong>3</strong><span>livros conectados</span></div>
          <div><strong>~450</strong><span>páginas planejadas</span></div>
          <div><strong>1</strong><span>método progressivo</span></div>
        </div>
      </section>

      <section id="trilogia" className="section darkSection">
        <div className="sectionHead">
          <div className="eyebrow">UMA JORNADA EM TRÊS ETAPAS</div>
          <h2>Você não precisa de mais frases.<br/>Precisa de progressão.</h2>
          <p>A coleção foi desenhada para ser lida em sequência, sem repetição e sem depender de entusiasmo passageiro.</p>
        </div>
        <div className="booksGrid">
          {books.map((book) => (
            <article className="bookCard" key={book.title}>
              <div className="bookNumber">{book.accent}</div>
              <div className="bookMeta">{book.kicker}</div>
              <h3>{book.title}</h3>
              <h4>{book.subtitle}</h4>
              <p>{book.copy}</p>
              <div className="bookSpine">MODO AÇÃO</div>
            </article>
          ))}
        </div>
      </section>

      <section id="metodo" className="section methodSection">
        <div className="sectionHead narrow">
          <div className="eyebrow">O MÉTODO</div>
          <h2>Direção → Ritmo → Construção</h2>
          <p>Uma arquitetura simples: decidir com clareza, executar com constância e usar essa constância para construir algo maior.</p>
        </div>
        <div className="steps">
          <div><span>01</span><h3>Direção</h3><p>Eliminar ruído, definir prioridade e assumir uma decisão operacional.</p></div>
          <div><span>02</span><h3>Ritmo</h3><p>Criar um sistema que funcione inclusive nos dias em que a vontade desaparece.</p></div>
          <div><span>03</span><h3>Construção</h3><p>Transformar disciplina em identidade, projetos, trabalho e autonomia.</p></div>
        </div>
      </section>

      <section id="oferta" className="section offerSection">
        <div className="offerCard">
          <div>
            <div className="eyebrow">EDIÇÃO DIGITAL • COLEÇÃO COMPLETA</div>
            <h2>Os três livros.<br/>Uma única jornada.</h2>
            <p className="offerCopy">
              Receba a trilogia completa em formato digital. A oferta final será conectada ao Stripe antes da publicação.
            </p>
            <ul>
              <li>Livro I — A Decisão</li>
              <li>Livro II — O Ritmo</li>
              <li>Livro III — A Construção</li>
              <li>Acesso digital após confirmação do pagamento</li>
            </ul>
          </div>
          <div className="priceBox">
            <span className="priceLabel">PREÇO DE LANÇAMENTO</span>
            <div className="price">R$ 49,90</div>
            <span className="priceNote">pagamento único</span>
            <a className="primary full" href={checkoutUrl}>Quero a trilogia</a>
            <small>Checkout seguro via Stripe.</small>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="sectionHead narrow">
          <div className="eyebrow">PERGUNTAS FREQUENTES</div>
          <h2>Antes de comprar</h2>
        </div>
        <div className="faq">
          <details><summary>Os livros são físicos?</summary><p>Não. A primeira edição será digital, para entrega rápida e atualização simples.</p></details>
          <details><summary>Preciso ler em ordem?</summary><p>É recomendado. A coleção foi construída como uma progressão: clareza, disciplina e construção.</p></details>
          <details><summary>Isso é só conteúdo motivacional?</summary><p>Não. O foco é método, exercícios, tomada de decisão, rotina e execução prática.</p></details>
          <details><summary>Quando recebo os arquivos?</summary><p>A entrega será vinculada à confirmação do pagamento quando a operação final de checkout for ativada.</p></details>
        </div>
      </section>

      <footer>
        <div className="brand">MODO AÇÃO</div>
        <p>Conteúdo educacional. Resultados dependem de contexto, aplicação e consistência individual.</p>
      </footer>
    </main>
  );
}