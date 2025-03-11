import React, { useState } from 'react'
import { CgMenuRightAlt, CgCloseR } from 'react-icons/cg'
import {
  ButtonMenu,
  IconMenu,
  ItemMenu,
  LinkItem,
  Logo,
  Menu,
  Nav,
} from './styles'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Nav>
      <LinkItem to="home" spy={true} smooth={true} offset={-80} duration={800}>
        <Logo src="/LogoTICavalinho.png" alt="Logo TI Automaccao Comecial" />
      </LinkItem>
      <Menu showMenu={showMenu}>
        <LinkItem
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Início</ItemMenu>
        </LinkItem>
        <LinkItem
          to="solutions"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Soluções</ItemMenu>
        </LinkItem>
        <LinkItem
          to="services"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Serviços</ItemMenu>
        </LinkItem>
        <LinkItem
          to="features"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Vantagens</ItemMenu>
        </LinkItem>
        <LinkItem
          to="clients"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Clientes</ItemMenu>
        </LinkItem>
      </Menu>

      <ButtonMenu onClick={() => setShowMenu(!showMenu)}>
        <IconMenu>
          {showMenu ? (
            <CgCloseR />
          ) : (
            <CgMenuRightAlt>
              <Menu showMenu={showMenu}>
                <ItemMenu>Início</ItemMenu>
                <ItemMenu>Soluções</ItemMenu>
                <ItemMenu>Serviços</ItemMenu>
                <ItemMenu>Clinetes</ItemMenu>
              </Menu>
            </CgMenuRightAlt>
          )}
        </IconMenu>
      </ButtonMenu>
    </Nav>
  )
}

export { Header }
