import type { PropertyCategory, PropertyStatus } from '../types/property'

type FilterValue<T extends string> = 'Todos' | T

type SearchPanelProps = {
  category: FilterValue<PropertyCategory>
  status: FilterValue<PropertyStatus>
  onCategoryChange: (category: FilterValue<PropertyCategory>) => void
  onStatusChange: (status: FilterValue<PropertyStatus>) => void
  whatsappLink: string
}

export function SearchPanel({
  category,
  status,
  onCategoryChange,
  onStatusChange,
  whatsappLink,
}: SearchPanelProps) {
  return (
    <section className="search-panel" aria-labelledby="busca-title">
      <div>
        <p className="eyebrow">Busca avançada</p>
        <h2 id="busca-title">Filtre as oportunidades iniciais</h2>
      </div>

      <label>
        Categoria
        <select value={category} onChange={(event) => onCategoryChange(event.target.value as typeof category)}>
          <option>Todos</option>
          <option>Apartamentos na planta</option>
          <option>Prontos</option>
        </select>
      </label>

      <label>
        Status
        <select value={status} onChange={(event) => onStatusChange(event.target.value as typeof status)}>
          <option>Todos</option>
          <option>Na planta</option>
          <option>Lançamento</option>
          <option>Pronto para morar</option>
        </select>
      </label>

      <a className="primary-button compact" href={whatsappLink} target="_blank" rel="noreferrer">
        Receber seleção
      </a>
    </section>
  )
}
