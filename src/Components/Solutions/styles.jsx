import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Section = styled(Element)`
  align-items: center;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  margin-top: 10%;

  @media (min-width: 840px) {
  }
`
export const Container = styled.section`
  color: var(--color-primary);
  padding: 50px;

  @media (min-width: 840px) {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Image = styled.img`
  width: 600px;

  @media (min-width: 840px) {
  }
`

export const InfoContainer = styled.div`
  align-items: center;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
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
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 600px;
  margin: auto;
`;

export const Card = styled.div`
  align-items: center;
  background: #f5f5f5;
  border: ${(props) => (props.highlight ? "3px solid var(--color-secondary)" : "none")};
  border-radius: 8px;
  box-shadow: ${(props) => (props.highlight ? "0 0 30px var(--color-secondary)" : "none")};
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 20px;
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 24px;
  color: #0044cc;
  margin-bottom: 10px;
`;