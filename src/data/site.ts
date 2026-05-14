import type { Property } from '../types/property'

export const whatsappNumber = '5511999999999'

const whatsappMessage = encodeURIComponent(
  'Olá, vim pelo site da Lima & Costa Imóveis e gostaria de receber opções de imóveis.',
)

export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export const properties: Property[] = [
  {
    id: 1,
    title: 'Helbor Patteo São Paulo',
    location: 'Vila Mariana, São Paulo',
    status: 'Lançamento',
    category: 'Apartamentos na planta',
    price: 'A partir de R$ 890 mil',
    area: '72 a 128 m²',
    bedrooms: '2 e 3 dorms.',
    suites: '1 ou 2 suítes',
    parking: '1 ou 2 vagas',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Fluxo facilitado durante a obra',
  },
  {
    id: 2,
    title: 'Reserva Alto Padrão',
    location: 'Moema, São Paulo',
    status: 'Na planta',
    category: 'Apartamentos na planta',
    price: 'A partir de R$ 1,45 mi',
    area: '94 a 164 m²',
    bedrooms: '3 e 4 dorms.',
    suites: '2 ou 3 suítes',
    parking: '2 vagas',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Projeto com lazer completo',
  },
  {
    id: 3,
    title: 'Essence Jardins',
    location: 'Jardins, São Paulo',
    status: 'Pronto para morar',
    category: 'Prontos',
    price: 'A partir de R$ 2,1 mi',
    area: '118 a 210 m²',
    bedrooms: '3 suítes',
    suites: '3 suítes',
    parking: '2 ou 3 vagas',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Entrega imediata e decorado disponível',
  },
  {
    id: 4,
    title: 'Vista Parque Residence',
    location: 'Brooklin, São Paulo',
    status: 'Pronto para morar',
    category: 'Prontos',
    price: 'A partir de R$ 980 mil',
    area: '68 a 102 m²',
    bedrooms: '2 e 3 dorms.',
    suites: '1 suíte',
    parking: '1 vaga',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Ótimo potencial para renda e moradia',
  },
]

export const stats = [
  { value: '20+', label: 'imóveis para iniciar o catálogo' },
  { value: 'SEO', label: 'estrutura pronta para orgânico' },
  { value: 'WhatsApp', label: 'conversão rápida de interessados' },
]
