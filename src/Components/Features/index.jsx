import { ScrollBtn } from '../ScrollBtn'
import { FeatureCard, FeaturesContainer, FeaturesWrapper } from './styles'

const Features = () => {
  const featureList = [
    {
      title: 'Gestão de Vendas',
      description:
        'Controle completo de vendas, desde a emissão de notas fiscais até o fechamento de caixa.',
    },
    {
      title: 'Automação de Processos',
      description:
        'Reduza erros humanos e ganhe tempo com a automação de processos do seu negócio.',
    },
    {
      title: 'Relatórios Completos',
      description:
        'Gere relatórios detalhados para analisar a performance do seu negócio com facilidade.',
    },
  ]

  return (
    <FeaturesContainer id='features'>
      <h2>Funcionalidades do Sistema</h2>
      <FeaturesWrapper>
        {featureList.map((feature, index) => (
          <FeatureCard key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesWrapper>
      <ScrollBtn text='Como começar a usar o PDV Legal' />
    </FeaturesContainer>
  )
}

export { Features }
