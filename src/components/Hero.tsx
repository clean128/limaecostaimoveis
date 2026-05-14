import type { Property } from '../types/property'

type HeroProps = {
  activeSlide: number
  onSelectSlide: (index: number) => void
  properties: Property[]
  stats: Array<{ value: string; label: string }>
  whatsappLink: string
}

export function Hero({ activeSlide, onSelectSlide, properties, stats, whatsappLink }: HeroProps) {
  const activeProperty = properties[activeSlide]

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <p className="eyebrow">Imóveis de médio e alto padrão</p>
        <h1>Encontre seu próximo imóvel com uma consultoria feita para converter.</h1>
        <p className="hero-copy">
          Apartamentos na planta, lançamentos e prontos para morar com atendimento direto,
          curadoria de oportunidades e experiência premium em todos os dispositivos.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#imoveis">
            Ver imóveis em destaque
          </a>
          <a className="secondary-button" href={whatsappLink} target="_blank" rel="noreferrer">
            Chamar consultor
          </a>
        </div>

        <div className="stats-grid" aria-label="Diferenciais do projeto">
          {stats.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-showcase" aria-label="Imóveis em destaque">
        <div className="showcase-card showcase-card-main">
          {properties.map((property, index) => (
            <img
              key={property.id}
              className={index === activeSlide ? 'is-active' : ''}
              src={property.image}
              alt={property.title}
            />
          ))}
          <div className="showcase-content">
            <span>{activeProperty.status}</span>
            <h2>{activeProperty.title}</h2>
            <p>{activeProperty.location}</p>
          </div>
          <div className="showcase-controls" aria-label="Selecionar imóvel em destaque">
            {properties.map((property, index) => (
              <button
                key={property.id}
                type="button"
                className={index === activeSlide ? 'is-active' : ''}
                onClick={() => onSelectSlide(index)}
                aria-label={`Mostrar ${property.title}`}
                aria-current={index === activeSlide ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
