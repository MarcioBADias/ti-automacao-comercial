import React from 'react'
import {
  Container,
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
            O sistema ideal para {' '}
          <span style={{ color: 'var(--color-dark)' }}>
            solucionar erros e facilitar pedidos nos pedidos
          </span>{' '}
          do seu bar, casa noturna, restaurante ou beach club.
        </TextTitle>
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
