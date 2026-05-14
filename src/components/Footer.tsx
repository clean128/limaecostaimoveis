import logoFull from '../assets/logo-full.png'

type FooterProps = {
  whatsappLink: string
}

export function Footer({ whatsappLink }: FooterProps) {
  return (
    <footer>
      <img src={logoFull} alt="Lima & Costa Imóveis" />
      <p>Imóveis em lançamento, na planta e prontos para morar.</p>
      <a href={whatsappLink} target="_blank" rel="noreferrer">
        Falar com consultor
      </a>
    </footer>
  )
}
