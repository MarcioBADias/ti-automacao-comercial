import React from 'react'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import { MdCancel } from 'react-icons/md'
import {
  Column,
  Container,
  Image,
  List,
  ListItem,
  Section,
  Table,
  TableContainer,
  Title,
  TitleColumn,
} from './styles'
import { ScrollBtn } from '../ScrollBtn'

const Solutions = () => {
  const problems = [
    'Garçons levando muito tempo para atender',
    'Pedidos enviados com erros para a cozinha',
    'Confusão na hora de fechar comanda em grupo',
    'Clientes que saem sem pagar',
    'Quebras de caixa no fim do dia',
  ]

  const solutions = [
    'Mais rapidez com PDV móvel e Totens',
    'Pedidos vinculados à mesa e impressão remota na cozinha',
    'Comanda individual por cliente',
    'Possibilidade de cobrança pelo Whatsapp',
    'Fechamento em 15min com adquirência integrada',
  ]

  return (
    <Container name="solutions" id="solutions">
      <Section>
        <div>
          <Image src="/PDV_Legal_Symbol.png" alt="PDV Legal" />
        </div>
        <div style={{ width: '70%' }}>
          <h1 style={{ color: '#ffffff', width: '90%', fontSize: 20 }}>
            Descubra como o PDV Legal vai aumentar a eficiência e eliminar os
            erros no seu bar, balada ou restaurante.
          </h1>
          <h2
            style={{
              color: '#ffffff',
              width: '80%',
              fontSize: 15,
              marginTop: 60,
            }}
          >
            O PDV Legal unifica pedidos, pagamentos e dados de consumo ,
            tornando sua operação mais ágil e precisa. Confira:
          </h2>
        </div>
      </Section>
      <Section>
        <TableContainer>
          <Table>
            <Column>
              <TitleColumn className="problems">
                <Title>Problemas na Operação</Title>
              </TitleColumn>
              <List>
                {problems.map((problem, index) => (
                  <ListItem key={index}>
                    <MdCancel
                      style={{ color: 'red', paddingRight: 10, width: 60 }}
                    />
                    {problem}
                  </ListItem>
                ))}
              </List>
            </Column>
            <Column>
              <TitleColumn className="solutions">
                <Title>Soluções com o Sistema PDV Legal</Title>
              </TitleColumn>
              <List>
                {solutions.map((solution, index) => (
                  <ListItem key={index} className="solution">
                    <TbRosetteDiscountCheckFilled
                      style={{ color: 'green', paddingRight: 10, width: 60 }}
                    />{' '}
                    {solution}
                  </ListItem>
                ))}
              </List>
            </Column>
          </Table>
        </TableContainer>
      </Section>
      <div style={{ marginLeft: '9%' }}>
        <h1
          style={{
            color: '#ffffff',
            width: '80%',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          Se você enfrenta atrasos, erros de comandas e confusão no fechamento,
          é hora de mudar.
        </h1>
        <ScrollBtn 
        text='Fale com um especialista'
        />
      </div>
    </Container>
  )
}

export { Solutions }
