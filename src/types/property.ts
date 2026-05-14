export type PropertyStatus = 'Na planta' | 'Lançamento' | 'Pronto para morar'

export type PropertyCategory = 'Apartamentos na planta' | 'Prontos'

export type Property = {
  id: number
  title: string
  location: string
  status: PropertyStatus
  category: PropertyCategory
  price: string
  area: string
  bedrooms: string
  suites: string
  parking: string
  image: string
  highlight: string
}
