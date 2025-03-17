import React from 'react'
import { FaWifi, FaUserTie, FaIdCard, FaClipboardList, FaChartPie, FaDollarSign } from "react-icons/fa"
import {
  Card,
  CardContainer,
  Container,
  Icon,
  Image,
  InfoContainer,
  Section,
  Text,
  Title,
} from './styles'
import { ScrollBtn } from '../ScrollBtn'

const Solutions = () => {
  
  const features = [
    { icon: <FaWifi />, text: "Funciona com ou sem internet", highlight: true },
    { icon: <FaUserTie />, text: "Implantação e treinamento presenciais" },
    { icon: <FaIdCard />, text: "Comanda individual por CPF" },
    { icon: <FaClipboardList />, text: "Gestão de pagamento, estoque e pedidos" },
    { icon: <FaChartPie />, text: "Dados de consumo por pessoa" },
    { icon: <FaDollarSign />, text: "Totens de auto-atendimento" }
  ];

  return (
    <>
    <Section name="solutions" id="solutions">
      <Title>Soluções</Title>
      <Container>
      <Container>
        <Image src="/card_soluctions.png" alt="PDV Legal" />
      </Container>
      <InfoContainer>
          <Text>
            Descubra como o PDV Legal vai aumentar a eficiência e eliminar os
            erros no seu bar, balada ou restaurante.
          </Text>
          {/* <h2
            style={{
              color: '#ffffff',
              fontSize: 15,
            }}
          >
            O PDV Legal unifica pedidos, pagamentos e dados de consumo ,
            tornando sua operação mais ágil e precisa. Confira:
          </h2> */}
    <CardContainer>
      {features.map((feature, i) => (
        <Card key={i} highlight={feature.highlight}>
          <Icon>{feature.icon}</Icon>
          <p>{feature.text}</p>
        </Card>
      ))}
    </CardContainer>
        {/* <TableContainer>
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
        </TableContainer> */}
      </InfoContainer>
      </Container>
      <div>
        <Text>
          Se você enfrenta atrasos, erros de comandas e confusão no fechamento,
          é hora de mudar.
        </Text>
      </div>
      <ScrollBtn
        bg={'var(--color-light)'}
        color={'var(--color-primary)'}
        text="Fale com um especialista"
      />
    </Section>
    </>
  )
}

export { Solutions }
