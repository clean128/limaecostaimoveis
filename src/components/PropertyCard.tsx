import { Link } from 'react-router-dom'
import type { Property } from '../types/property'
import { buildWhatsAppLink } from '../utils/whatsapp'

type PropertyCardProps = {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const interestLink = buildWhatsAppLink(
    `Olá! Tenho interesse no imóvel ${property.title} (${property.location}).`,
  )

  return (
    <article className="property-card">
      <Link className="property-card-link" to={`/imovel/${property.id}`}>
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
        </div>
      </Link>

      <div className="property-footer">
        <strong>{property.price}</strong>
        <div className="property-actions">
          <Link className="property-detail-link" to={`/imovel/${property.id}`}>
            Ver detalhes
          </Link>
          <a href={interestLink} target="_blank" rel="noreferrer">
            Tenho interesse
          </a>
        </div>
      </div>
    </article>
  )
}
