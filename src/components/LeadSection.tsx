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

      <form className="lead-form">
        <label>
          Nome
          <input type="text" name="name" placeholder="Seu nome" />
        </label>
        <label>
          WhatsApp
          <input type="tel" name="phone" placeholder="(11) 99999-9999" />
        </label>
        <label>
          Interesse
          <select name="interest" defaultValue="">
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option>Apartamento na planta</option>
            <option>Imóvel pronto para morar</option>
            <option>Investimento</option>
          </select>
        </label>
        <button type="button">Enviar interesse</button>
        <p>Na versão com backend, este formulário pode salvar leads no Supabase e acionar CRM.</p>
      </form>
    </section>
  )
}
