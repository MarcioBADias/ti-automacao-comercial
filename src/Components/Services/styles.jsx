import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled(Element)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;

  @media (min-width: 840px) {
  }
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: 840px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const Card = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 5px 5px 0px black;
  flex-direction: column;
  font-family: Arial, sans-serif;
  margin: 2rem;
  padding: 0.5rem;

  @media (min-width: 840px) {
    width: 25%;
    margin: 1rem;
  }
`
export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
`
export const TextCard = styled.p`
  color: black;
  font-size: 1rem;
  margin-top: 5px;
  padding: 0.5rem;
`
