import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Section = styled(Element)`
  align-items: center;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  @media (min-width: 840px) {
  }
`
export const Title = styled.h1`
  align-items: center;
  color: var(--color-light);
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const Container = styled.section`
  color: var(--color-primary);

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

export const Text = styled.h1`
  align-items: center;
  color: var(--color-light);
  font-size: 1rem;
  margin: 2rem 0;
  text-align: center;
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