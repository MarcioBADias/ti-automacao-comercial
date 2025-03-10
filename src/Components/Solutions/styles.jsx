import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled(Element)`
  align-items: center;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  margin-top: 10%;

  @media (min-width: 840px) {
    padding: 1rem;
  }
`
export const Section = styled.section`
  color: var(--color-primary);
  padding: 50px;

  @media (min-width: 840px) {
    display: flex;
  }
`
export const Image = styled.img`
  width: 600px;
  margin: -15.5% 0 0 -18%;
  transform: rotateY(180deg);

  @media (min-width: 840px) {
    width: 600px;
    margin: -15.6% 0 0 -17%;
  }
`
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 840px) {
    padding: 1rem;
  }
`

export const Table = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`

export const Column = styled.div`
  background: var(--color-light);
  flex: 1;
`
export const TitleColumn = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  min-height: 20%;
  padding: 1rem;
  &.problems {
    background: #c90000;
  }
  &.solutions {
    background: #009c2a;
  }
`

export const Title = styled.h2`
  color: var(--color-light);
  text-align: center;
  margin-bottom: 20px;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;
  padding: 1rem;
`
