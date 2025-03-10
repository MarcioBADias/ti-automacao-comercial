import React from 'react'
import {
  Card,
  CardContainer,
  Container,
  Icon,
  ImageHightlight,
  Logo,
  TextCard,
  TextTitle,
} from './styles'
import { BsPersonVcardFill } from 'react-icons/bs'
import { IoReceiptSharp } from 'react-icons/io5'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { Contact } from '../Contact'

const Home = () => {
  return (
    <Container>
      <div
        name="home"
        id="home"
        className="prev_about"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <Logo src="/Logo_TI_Comp.png" alt="Logo TI Automacao comercial" />
        <TextTitle>
          O melhor sistema para{' '}
          <span style={{ color: 'var(--color-secondary)' }}>
            solucionar erros e facilitar pedidos nos pedidos
          </span>{' '}
          do seu bar, casa noturna, restaurante ou beach club.
        </TextTitle>

        <CardContainer>
          <Card>
            <Icon>
              <BsPersonVcardFill />
            </Icon>
            <TextCard>Comanda identificada por CPF</TextCard>
          </Card>

          <Card>
            <Icon>
              <IoReceiptSharp />
            </Icon>
            <TextCard>PDV com cardápio</TextCard>
          </Card>

          <Card>
            <Icon>
              <MdSystemUpdateAlt />
            </Icon>
            <TextCard>Sistema unificado</TextCard>
          </Card>
        </CardContainer>

        <Contact />
      </div>
      <div>
        <ImageHightlight
          src="/pdvlegal-mobile.png"
          alt="Arte da Logo"
          className="logo_art"
        />
      </div>
    </Container>
  )
}

export { Home }
