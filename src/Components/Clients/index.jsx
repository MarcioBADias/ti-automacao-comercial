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
import { ScrollBtn } from '../ScrollBtn'
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
    <>
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
            "À TI Consultoria, agradecemos por nos conceder um trabalho de excelência nesses 
            últimos anos, com proatividade, cordialidade e eficiência."
            <p>- Fishbone</p>
          </C.Text>
        </C.TextArea>
        <C.TextArea>
          <C.Text>
            "Sou super fã do trabalho de vocês, sempre dispostos a nos ajudar em tudo que precisamos. 
            Competência e profissionalismo são o diferencial dessa empresa. Adoro e super indico! 
            Vocês são indispensáveis na minha empresa."
            <p>- Outros 500</p>
          </C.Text>
          <C.Mark src={MarkR} size={80} alt="Simbulo de aspas" />
        </C.TextArea>
        <C.TextArea>
          <C.Mark src={MarkL} size={80} alt="Simbulo de aspas" />
          <C.Text>
            "Nossa experiência no Kazebre com o sistema é muito boa. Um sistema confiável, muito 
            completo e estável. A equipe de suporte e atendimento sempre muito atenciosos e prestativos, 
            sempre apresentando soluções quando acionados. Certeza de que indico os serviços do sistema 
            para os comércios que precisem."
            <p>- Kazebre</p>
          </C.Text>
        </C.TextArea>
      </C.Container>
    </C.Section>
      <ScrollBtn text='Quero me tornar PDV Legal' />
    </>
  )
}

export { Clients }
