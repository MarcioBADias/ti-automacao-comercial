import styled from 'styled-components'
import { Element } from 'react-scroll'

export const Container = styled(Element)`
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
  margin-top: 20%;
  padding: 1rem 2rem;
  max-width: 100vw;

  @media (min-width: 840px) {
    margin-top: 8%;
    padding: 1rem;
    width: 50%;
  }
`

export const TextTitle = styled.div`
  font-size: 2rem;
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
  padding: 0.5rem;
  width: 40%;
`

export const Icon = styled.div`
  color: var(--color-primary);
  font-size: 2rem;
`

export const TextCard = styled.p`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 5px;
  padding: 0.5rem;
`

export const ImageHightlight = styled.img`
  align-items: center;
  width: 400px;
  max-width: 100vw;
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
