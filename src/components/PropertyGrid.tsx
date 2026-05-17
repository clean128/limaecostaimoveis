import { PropertyCard } from './PropertyCard'
import type { Property } from '../types/property'

type PropertyGridProps = {
  properties: Property[]
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <section className="section" id="imoveis">
      <div className="section-heading">
        <p className="eyebrow">Destaques e lançamentos</p>
        <h2>Encontre o imóvel ideal para morar ou investir.</h2>
        <p>
          Confira as oportunidades disponíveis. Ao incluir novos cadastros, eles aparecem
          automaticamente nesta lista, em novas linhas abaixo.
        </p>
      </div>

      {properties.length === 0 ? (
        <p className="empty-state">Nenhum imóvel encontrado com os filtros selecionados.</p>
      ) : (
        <div className="property-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  )
}
