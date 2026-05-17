/**
 * Cadastro inicial de imóveis:
 * duplique um objeto abaixo, altere o id e preencha os campos.
 * Novos imóveis aparecem automaticamente na grade, em novas linhas.
 */
import type { Property } from '../types/property'

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
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    highlight: 'Fluxo facilitado durante a obra',
    description:
      'Empreendimento de médio e alto padrão na Vila Mariana, com plantas inteligentes, lazer completo e excelente localização. Ideal para moradia ou investimento com potencial de valorização na região.',
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
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    highlight: 'Projeto com lazer completo',
    description:
      'Lançamento em Moema com arquitetura contemporânea, áreas de convivência amplas e acabamentos premium. Plantas versáteis para famílias que buscam conforto e exclusividade.',
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
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    ],
    highlight: 'Entrega imediata e decorado disponível',
    description:
      'Apartamentos prontos nos Jardins, com plantas amplas, vista privilegiada e infraestrutura de alto padrão. Perfeito para quem deseja mudar com rapidez sem abrir mão de sofisticação.',
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
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    ],
    highlight: 'Ótimo potencial para renda e moradia',
    description:
      'Residencial no Brooklin com ótima relação entre metragem e investimento. Ambientes bem distribuídos, lazer completo e localização estratégica para moradia ou locação.',
  },
]

export function getPropertyById(id: number) {
  return properties.find((property) => property.id === id)
}
