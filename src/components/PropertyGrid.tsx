import type { Property } from '../types/property'

type PropertyGridProps = {
  properties: Property[]
  whatsappLink: string
}

export function PropertyGrid({ properties, whatsappLink }: PropertyGridProps) {
  return (
    <section className="section" id="imoveis">
      <div className="section-heading">
        <p className="eyebrow">Destaques e lançamentos</p>
        <h2>Catálogo inicial com imóveis prontos para campanhas.</h2>
        <p>
          Estes cards simulam o primeiro lote de 20 a 30 imóveis. Depois, os dados podem vir do
          Supabase ou de um painel administrativo dedicado.
        </p>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <article className="property-card" key={property.id}>
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              <span>{property.status}</span>
            </div>

            <div className="property-content">
              <p className="property-location">{property.location}</p>
              <h3>{property.title}</h3>
              <p className="property-highlight">{property.highlight}</p>

              <dl>
                <div>
                  <dt>Área</dt>
                  <dd>{property.area}</dd>
                </div>
                <div>
                  <dt>Dorms.</dt>
                  <dd>{property.bedrooms}</dd>
                </div>
                <div>
                  <dt>Vagas</dt>
                  <dd>{property.parking}</dd>
                </div>
              </dl>

              <div className="property-footer">
                <strong>{property.price}</strong>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Tenho interesse
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
