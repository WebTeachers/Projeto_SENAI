import home from 'components/Header/home.module.scss'
import Image from 'next/image'
export const Header = () => (
  <header className={home.container}>
    <div className={home.header_content}>
      <Image
        src="/riot-games.svg"
        width={52}
        height={26}
        alt="Logo da Riot Games"
      />
      <span className={home.divisor}></span>
      <Image
        src="/valorant.svg"
        width={32}
        height={26}
        alt="Logo da Valorant"
      />
      <nav className={home.menu}>
        <a href="./">AGENTES</a>
        <a href="frm_save">CADASTRO</a>
        <a href="frm_edit#">EDITAR</a>
      </nav>
    </div>
  </header>
)
