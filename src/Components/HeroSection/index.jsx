import React from 'react'
import {
  Card,
  CardContainer,
  Container,
  Icon,
  ImageHightlight,
  TextCard,
  TextTitle,
} from './style'
import { BsPersonVcardFill } from 'react-icons/bs'
import { IoReceiptSharp } from 'react-icons/io5'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { Contact } from '../Form'

const HeroSection = () => {
  return (
    <section>
      <Container
        name="home"
        id="home"
        className="prev_about"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
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
      </Container>
      <Container>
        <ImageHightlight
          src="/maquininha.png"
          alt="Arte da Logo"
          className="logo_art"
        />
      </Container>
    </section>
  )
}

export { HeroSection }
