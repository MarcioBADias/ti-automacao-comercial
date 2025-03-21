import React from 'react'
import {
  Container,
  ImageContainer,
  ImageHightlight,
  Logo,
  TextTitle,
} from './styles'
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
          O sistema ideal para{' '}
          <span style={{ color: 'var(--color-dark)' }}>
            solucionar erros e facilitar a gestão nos pedidos
          </span>{' '}
          do seu bar, casa noturna, restaurante ou beach club.
        </TextTitle>
        <Contact />
      </div>
      <ImageContainer>
        <ImageHightlight
          src="/auto.png"
          alt="Maquininha"
          className="logo_art"
        />
      </ImageContainer>
    </Container>
  )
}

export { Home }
