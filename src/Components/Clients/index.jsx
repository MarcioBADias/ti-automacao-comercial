import React, { useEffect, useState } from 'react'
import chez_michou from '/chez_michou.png'
import dom_leal from '/dom_leal.jpg'
import fishbone from '/fishbone.jpg'
import luigi from '/luigi.jpg'
import outro_500 from '/outro_500.jpg'
import patio_michou from '/patio_michou.png'
import the_duck_pub from '/the_duck_pub.jpg'
import MarkL from '/mark-L.svg'
import MarkR from '/mark-R.svg'

import * as C from './styles'
const Clients = () => {
  const [responsiveWidth, setResponsiveWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setResponsiveWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const logosCli = [
    chez_michou,
    dom_leal,
    fishbone,
    luigi,
    outro_500,
    patio_michou,
    the_duck_pub,
  ]

  return (
    <C.Section id="clients">
      <C.Container
        style={{
          minHeight: '100vh',
        }}
      >
        <C.Container
          style={{
            position: 'absolute',
            top: 80,
          }}
        >
          <C.Title
            color={'var(--cor-light-primary)'}
            left={responsiveWidth < 840 ? 80 : -30}
            top={responsiveWidth < 840 && 30}
          >
            Veja quem já usa o
          </C.Title>
          <C.Title
            color={'var(--cor-green-primary)'}
            left={responsiveWidth < 840 ? 230 : 210}
          >
            TI Automoções Comerciais
          </C.Title>
        </C.Container>
        <C.ClietsArea>
          <C.LogosContainer>
            {logosCli.map((logo, i) => (
              <C.LogosCli
                key={i}
                heightSize={responsiveWidth < 840 ? 200 : 100}
                widthSize={responsiveWidth < 840 ? 400 : 200}
                src={logo}
                alt="Logo Cliente"
              />
            ))}
          </C.LogosContainer>
        </C.ClietsArea>
      </C.Container>

      <C.Container
        style={{
          background: 'var(--cor-light-primary',
          color: 'var(--cor-dark-primary)',
        }}
      >
        <C.Container>
          <C.Title
            style={{
              color: 'var(--cor-dark-primary)',
              marginLeft: -200,
            }}
          >
            Depoimentos
          </C.Title>
          <C.Title
            style={{
              color: 'var(--cor-green-primary)',
              marginLeft: 100,
            }}
          >
            de nossos clientes
          </C.Title>
        </C.Container>
        <C.TextArea>
          <C.Mark src={MarkL} size={80} alt="Simbulo de aspas" />
          <C.Text>
            "O CheckSpeech AI é incrível! A transcrição é precisa e a
            interpretação de sentimentos ajuda muito em nossa comunicação com os
            clientes."
          </C.Text>
        </C.TextArea>
        <C.TextArea>
          <C.Text>
            "O CheckSpeech AI nos permitiu transcrever facilmente nossas
            conversas com os clientes e analisar seus sentimentos para melhorar
            nossa comunicação. É uma ferramenta essencial!"
          </C.Text>
          <C.Mark src={MarkR} size={80} alt="Simbulo de aspas" />
        </C.TextArea>
        <C.TextArea>
          <C.Mark src={MarkL} size={80} alt="Simbulo de aspas" />
          <C.Text>
            "O CheckSpeech AI é muito preciso na transcrição e na interpretação
            de sentimentos, o que é muito útil em minhas pesquisas acadêmicas."
          </C.Text>
        </C.TextArea>
        <C.TextArea>
          <C.Text>
            "O CheckSpeech AI é fácil de usar e nos deu insights valiosos sobre
            a opinião do consumidor. É uma ferramenta essencial para o
            marketing."
          </C.Text>
          <C.Mark src={MarkR} size={80} alt="Simbulo de aspas" />
        </C.TextArea>
      </C.Container>
    </C.Section>
  )
}

export { Clients }
