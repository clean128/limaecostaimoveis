const features = [
  {
    number: '01',
    title: 'SEO e tráfego pago',
    text: 'Páginas preparadas para indexação, campanhas por imóvel e futuras landing pages.',
  },
  {
    number: '02',
    title: 'Cadastro escalável',
    text: 'Hoje os imóveis ficam no código. A próxima etapa natural é Supabase com painel admin.',
  },
  {
    number: '03',
    title: 'Conversão rápida',
    text: 'CTAs para WhatsApp e formulário de lead visíveis nos pontos mais importantes da jornada.',
  },
]

export function StrategySection() {
  return (
    <section className="split-section" id="sobre">
      <div>
        <p className="eyebrow">Estratégia digital</p>
        <h2>Visual de construtora premium com foco real em lead qualificado.</h2>
      </div>

      <div className="feature-list">
        {features.map((feature) => (
          <article key={feature.number}>
            <span>{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
