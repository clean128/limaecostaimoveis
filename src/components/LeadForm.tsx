import { type FormEvent, useState } from 'react'
import { buildWhatsAppLink } from '../utils/whatsapp'

type LeadFormProps = {
  propertyTitle?: string
}

export function LeadForm({ propertyTitle }: LeadFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const lines = [
      'Olá! Vim pelo site da Lima & Costa Imóveis.',
      name && `Nome: ${name}`,
      phone && `WhatsApp: ${phone}`,
      interest && `Interesse: ${interest}`,
      propertyTitle && `Imóvel: ${propertyTitle}`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean)

    window.open(buildWhatsAppLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        WhatsApp
        <input
          type="tel"
          name="phone"
          placeholder="(11) 99999-9999"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </label>
      <label>
        Interesse
        <select
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          required
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option>Apartamento na planta</option>
          <option>Imóvel pronto para morar</option>
          <option>Investimento</option>
        </select>
      </label>
      <label>
        Mensagem
        <textarea
          name="message"
          rows={4}
          placeholder="Conte um pouco sobre o que você procura"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button type="submit">Enviar interesse</button>
      <p>Ao enviar, você será direcionado ao WhatsApp do consultor com sua mensagem.</p>
    </form>
  )
}
