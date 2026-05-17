import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark.png'

type HeaderProps = {
  whatsappLink: string
}

export function Header({ whatsappLink }: HeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Lima & Costa Imóveis">
        <img src={logoMark} alt="" />
        <span>Lima & Costa</span>
      </Link>

      <nav aria-label="Navegação principal">
        <Link to="/#imoveis">Imóveis</Link>
        <Link to="/#contato">Contato</Link>
      </nav>

      <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>
    </header>
  )
}
