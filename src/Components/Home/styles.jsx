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

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const Card = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 5px 5px 0px black;
  font-family: Arial, sans-serif;
  margin-top: 1rem;
  min-height: 130px;
  padding: 0.5rem;
  width: 40%;
`

export const Icon = styled.div`
  color: var(--color-primary);
  font-size: 1.8rem;
`

export const TextCard = styled.p`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 5px;
  padding: 0.5rem;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageHightlight = styled.img`
  height: 400px;
  width: 400px;

  @media (min-width: 840px) {
    margin: 8% 0 0 30%;
    min-height: 600px;
    min-width: 700px;
  }
`

/*export const AnimatedLogo = styled.img`
  margin: 1rem 0 -5rem 0rem;
  width: 250px;
  animation: spinHorizontal 5s linear infinite;

  @keyframes spinHorizontal {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @media (min-width: 840px) {
    align-items: center;
    margin: 1rem 0 -5rem 15rem;
    width: 35%;
  }
`*/
