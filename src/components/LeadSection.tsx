import { LeadForm } from './LeadForm'

export function LeadSection() {
  return (
    <section className="lead-section" id="contato">
      <div>
        <p className="eyebrow">Atendimento personalizado</p>
        <h2>Receba uma curadoria de imóveis para seu perfil.</h2>
        <p>
          Ideal para primeiro imóvel, investimento ou compra de apartamento na planta com apoio de
          um corretor especializado.
        </p>
      </div>

      <LeadForm />
    </section>
  )
}
