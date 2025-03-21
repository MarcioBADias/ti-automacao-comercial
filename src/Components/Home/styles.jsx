import styled from 'styled-components'
import { Element } from 'react-scroll'

export const Container = styled(Element)`
  padding: 1rem 2rem;
  max-width: 100vw;

  @media (min-width: 840px) {
    display: flex;
    margin-top: 3%;
    padding: 1rem;
    width: 50%;
  }
`

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const TextTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ImageHightlight = styled.img`
  @media (min-width: 840px) {
    min-width: 550px;
  }
`
