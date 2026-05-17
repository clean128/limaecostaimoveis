import { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { LeadSection } from '../components/LeadSection'
import { PropertyGrid } from '../components/PropertyGrid'
import { SearchPanel } from '../components/SearchPanel'
import { properties, stats, whatsappLink } from '../data/site'
import { useHeroSlideshow } from '../hooks/useHeroSlideshow'
import type { PropertyCategory, PropertyStatus } from '../types/property'

type FilterValue<T extends string> = 'Todos' | T

export function HomePage() {
  const [category, setCategory] = useState<FilterValue<PropertyCategory>>('Todos')
  const [status, setStatus] = useState<FilterValue<PropertyStatus>>('Todos')
  const { activeSlide, setActiveSlide } = useHeroSlideshow(properties.length)

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesCategory = category === 'Todos' || property.category === category
      const matchesStatus = status === 'Todos' || property.status === status

      return matchesCategory && matchesStatus
    })
  }, [category, status])

  return (
    <main>
      <Header whatsappLink={whatsappLink} />
      <Hero
        activeSlide={activeSlide}
        onSelectSlide={setActiveSlide}
        properties={properties}
        stats={stats}
        whatsappLink={whatsappLink}
      />
      <SearchPanel
        category={category}
        onCategoryChange={setCategory}
        onStatusChange={setStatus}
        status={status}
        whatsappLink={whatsappLink}
      />
      <PropertyGrid properties={filteredProperties} />
      <LeadSection />
      <Footer whatsappLink={whatsappLink} />
    </main>
  )
}
