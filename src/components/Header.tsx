import logoMark from '../assets/logo-mark.png'

type HeaderProps = {
  whatsappLink: string
}

export function Header({ whatsappLink }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Lima & Costa Imóveis">
        <img src={logoMark} alt="" />
        <span>Lima & Costa</span>
      </a>

      <nav aria-label="Navegação principal">
        <a href="#imoveis">Imóveis</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>
    </header>
  )
}
