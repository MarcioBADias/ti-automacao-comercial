import { Element } from 'react-scroll'
import { Field } from 'formik'
import styled from 'styled-components'

export const Section = styled.section`
  background: var(--cor-dark-primary);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const Container = styled.div`
  align-items: center;
  background: var(--cor-dark-primary);
  border: 5px solid var(--cor-green-primary);
  border-radius: 15px;
  box-shadow: 0px 0px 10px 10px var(--cor-green-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0.5rem;
  width: 40vw;

  @media (max-width: 840px) {
    width: 80vw;
  }
`
export const TextArea = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`
export const Icon = styled.div`
  color: var(--color-primary);
  font-size: 2rem;
`

export const Title = styled.h1`
  color: #000000;
  font-size: 1rem;
  padding-bottom: 0.5rem;
`

export const Input = styled(Field)`
  background: #ffffff;
  border: 1px var(--color-primary) solid;
  border-radius: 5px;
  color: var(--color-primary);
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;

  ::placeholder {
    color: var(--color-primary);
  }
`

export const ErrorMessage = styled.span`
  text-align: left;
  color: red;
  display: block;
  margin-top: -1.2rem;
  padding: 0.5rem;
  width: 80%;
`

export const Button = styled.button`
  background: var(--color-primary);
  border: none;
  border-radius: 25px;
  box-shadow: 5px 5px 5px 0px var(--color-secondary);
  color: var(--color-light);
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 2rem;

  &:hover {
    background: var(--color-secondary);
    font-size: 1.5rem;
  }

  &:active {
    background: var(--color-primary);
  }

  &:focus {
    outline: none;
    background: var(--color-primary);
  }

  @media (max-width: 840px) {
    margin-bottom: 2rem;
  }
`
