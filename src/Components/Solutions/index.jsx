import React from 'react'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import { FaWifi, FaUserTie, FaIdCard, FaClipboardList, FaChartPie, FaDollarSign } from "react-icons/fa"
import { MdCancel } from 'react-icons/md'
import {
  Card,
  CardContainer,
  Column,
  Container,
  Icon,
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
    'Filas longas no caixa',
    'Clientes desistindo por falta de pagamento digital',
    'Dificuldade no controle de estoque em tempo real',
    'Erros no cálculo de troco e fechamento de caixa',
    'Falta de relatórios detalhados sobre vendas',
  ]

  const solutions = [
    'Agilize com autoatendimento e QR Code para pagamento',
    'Aceite pagamento por aproximação e PIX integrado',
    'Sincronização automática do estoque com cada venda',
    'Fechamento de caixa automático e sem erros',
    'Relatórios completos de vendas e lucratividade',
  ]
  
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
      <Container>
      <Container>
        <Image src="/card_soluctions.png" alt="PDV Legal" />
      </Container>
      <Container>
          {/* <h1 style={{ color: '#ffffff', fontSize: 20 }}>
            Descubra como o PDV Legal vai aumentar a eficiência e eliminar os
            erros no seu bar, balada ou restaurante.
          </h1>
          <h2
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
      </Container>
      </Container>
      <div>
        <h1
          style={{
            color: '#ffffff',
            fontSize: 20,
            padding: 30,
            textAlign: 'center',
          }}
        >
          Se você enfrenta atrasos, erros de comandas e confusão no fechamento,
          é hora de mudar.
        </h1>
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
