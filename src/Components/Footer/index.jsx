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
          <h3>TI Automacoes</h3>
          <p>Transformando o futuro dos negócios com soluções de automação.</p>
          <p>Endereço: Av. Henrique Terra, 926 - sala 103 - Portinho</p>
          <p>Cabo Frio - RJ, 28915-115</p>
        </FooterSection>
        <FooterSection>
          <h3>Links Rápidos</h3>
          <a style={{ marginRight: 10 }} href="#home">
            Início
          </a>
          <a style={{ marginRight: 10 }} href="#features">
            Soluções
          </a>
          <a style={{ marginRight: 10 }} href="#pricing">
            Serviços
          </a>
          <a style={{ marginRight: 10 }} href="#contact">
            Vantagens
          </a>
          <a style={{ marginRight: 10 }} href="#contact">
            Clientes
          </a>
        </FooterSection>
        <FooterSection>
          <h3>Redes Sociais</h3>
          <SocialMediaIcons>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={{ color: '#ffffff' }} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: '#ffffff' }} />
            </a>
            <a
              href="https://wa.me/5522999866001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ color: '#ffffff' }} />
            </a>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
      <p>&copy; 2025 TI Automacoes. Todos os direitos reservados.</p>
      <p style={{ marginTop: '-25px' }}>Desenvolvimento Marcio Dias</p>
    </FooterContainer>
  )
}

export { Footer }
