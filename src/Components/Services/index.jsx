import React, { useEffect, useReducer } from 'react'
import { Card, CardContainer, CardImage, Container, TextCard } from './styles'

const reduce = (state, action) => {
  if (action.type === 'set_infos') {
    return { ...state, infos: action.infos }
  }

  return state
}

const initialState = {
  infos: [],
}

const Services = () => {
  const [status, dispatch] = useReducer(reduce, initialState)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/MarcioBADias/data-fake/refs/heads/main/infos.json',
        )
        const data = await response.json()
        dispatch({ type: 'set_infos', infos: data })
      } catch (err) {
        console.error('Erro ao carregar a API: ', err)
      }
    }
    fetchData()
  }, [])

  return (
    <Container name="services" id="services">
      <div>
        <h1 style={{ textAlign: 'center' }}>Segmentos</h1>
        <CardContainer>
          {status.infos.map((info, index) => (
            <Card key={index}>
              <div>
                <CardImage
                  src={`${info.subtitle}.png`}
                  alt={`Foto de ${info.subtitle}`}
                />
              </div>
              <div>
                <h2 style={{ marginBottom: 10 }}>{info.subtitle}</h2>
                <TextCard>{info.description}</TextCard>
              </div>
            </Card>
          ))}
        </CardContainer>
      </div>
    </Container>
  )
}

export { Services }
