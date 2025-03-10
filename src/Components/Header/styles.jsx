import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: center;
  background: rgb(32, 24, 77);
  background: var(--color-light);
  color: var(--color-light);
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
`

export const Logo = styled.img`
  width: 60px;
  cursor: pointer;
`

export const Menu = styled.ul`
  color: var(--color-primary);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: auto;

  @media (max-width: 840px) {
    background: linear-gradient(
      90deg,
      var(--color-primary) 0%,
      var(--color-secondary) 58%
    );
    backdrop-filter: blur(3px);
    color: var(--color-light);
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    flex-direction: column;
    height: 100vh;
    justify-content: start;
    opacity: 0.95;
    padding: 10px 0;
    position: absolute;
    right: 0;
    top: 80px;
    width: 100%;
    z-index: 99;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: var(--color-secondary);
  }
`

export const ItemMenu = styled.li`
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    color: var(--color-secondary);
    cursor: pointer;
    font-size: 1.2rem;
  }

  @media (max-width: 840px) {
    margin: 1rem auto;
  }
`

export const ButtonMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;

  @media (max-width: 840px) {
    display: flex;
    color: var(--color-primary);
  }
`

export const IconMenu = styled.i`
  svg {
    height: 50px;
    width: 50px;
  }
  :hover {
    color: var(--color-secondary);
    cursor: pointer;
  }
`
