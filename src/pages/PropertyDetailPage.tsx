import { Link, Navigate, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LeadForm } from '../components/LeadForm'
import { PropertyGallery } from '../components/PropertyGallery'
import { getPropertyById, whatsappLink } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

export function PropertyDetailPage() {
  const { id } = useParams()
  const propertyId = Number(id)
  const property = Number.isFinite(propertyId) ? getPropertyById(propertyId) : undefined

  if (!property) {
    return <Navigate to="/" replace />
  }

  const gallery = property.images.length > 0 ? property.images : [property.image]
  const interestLink = buildWhatsAppLink(
    `Olá! Tenho interesse no imóvel ${property.title} (${property.location}).`,
  )

  return (
    <main>
      <Header whatsappLink={whatsappLink} />

      <section className="property-detail">
        <Link className="back-link" to="/#imoveis">
          ← Voltar aos imóveis
        </Link>

        <PropertyGallery
          key={property.id}
          images={gallery}
          status={property.status}
          title={property.title}
        />

        <div className="detail-layout">
          <div className="detail-info">
            <p className="property-location">{property.location}</p>
            <h1>{property.title}</h1>
            <p className="property-highlight">{property.highlight}</p>
            <p className="detail-description">{property.description}</p>

            <dl className="detail-specs">
              <div>
                <dt>Área</dt>
                <dd>{property.area}</dd>
              </div>
              <div>
                <dt>Dormitórios</dt>
                <dd>{property.bedrooms}</dd>
              </div>
              <div>
                <dt>Suítes</dt>
                <dd>{property.suites}</dd>
              </div>
              <div>
                <dt>Vagas</dt>
                <dd>{property.parking}</dd>
              </div>
              <div>
                <dt>Categoria</dt>
                <dd>{property.category}</dd>
              </div>
              <div>
                <dt>Investimento</dt>
                <dd>{property.price}</dd>
              </div>
            </dl>

            <a
              className="primary-button detail-whatsapp"
              href={interestLink}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp sobre este imóvel
            </a>
          </div>

          <div className="detail-lead">
            <h2>Tenho interesse neste imóvel</h2>
            <p>Preencha o formulário e fale diretamente com o consultor.</p>
            <LeadForm propertyTitle={property.title} />
          </div>
        </div>
      </section>

      <Footer whatsappLink={whatsappLink} />
    </main>
  )
}
