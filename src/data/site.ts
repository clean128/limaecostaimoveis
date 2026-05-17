import { buildWhatsAppLink } from '../utils/whatsapp'

export { properties, getPropertyById } from './properties'

export { whatsappNumber } from '../utils/whatsapp'

export const whatsappLink = buildWhatsAppLink(
  'Olá, vim pelo site da Lima & Costa Imóveis e gostaria de receber opções de imóveis.',
)

export const stats = [
  { value: '20+', label: 'imóveis selecionados para você' },
  { value: '100%', label: 'atendimento personalizado' },
  { value: 'WhatsApp', label: 'contato direto com o consultor' },
]
