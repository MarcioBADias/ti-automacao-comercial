import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SocialMediaIcons,
} from './styles'

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>TI Automação</h3>
          <p>Transformando o futuro dos negócios com soluções de automação.</p>
          <p>Endereço: Av. Henrique Terra, 926 - sala 103 - Portinho</p>
          <p>Cabo Frio - RJ, 28915-115</p>
        </FooterSection>
        <FooterSection>
          <h3>Links Rápidos</h3>
          <a style={{ marginRight: 10 }} href="#home">
            Início
          </a>
          <a style={{ marginRight: 10 }} href="#services">
            Serviços
          </a>
          <a style={{ marginRight: 10 }} href="#features">
            Vantagens
          </a>
          <a style={{ marginRight: 10 }} href="#clients">
            Clientes
          </a>
        </FooterSection>
        <FooterSection>
          <h3>Redes Sociais</h3>
          <SocialMediaIcons>
            <a
              href="https://www.instagram.com/ti_automacao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: '#ffffff' }} />
            </a>
            <a
              href="https://wa.me/5521996526895"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ color: '#ffffff' }} />
            </a>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
      <p>&copy; 2025 TI Automacoes. Todos os direitos reservados.</p>
      <p style={{ marginTop: '-25px', fontSize: 15 }}>
        Desenvolvimento Web: Marcio Dias
      </p>
    </FooterContainer>
  )
}

export { Footer }
