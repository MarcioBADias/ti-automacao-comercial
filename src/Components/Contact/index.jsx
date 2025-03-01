import React from 'react'
import { RiArrowDownDoubleLine } from 'react-icons/ri'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  Section,
  Title,
  TextArea,
} from './styles'
import { Icon } from './styles'

const schema = Yup.object().shape({
  fullName: Yup.string().required(),
  whatsapp: Yup.number().min(11).required(),
  email: Yup.string().email().required(),
  instagram: Yup.string().required(),
  revenues: Yup.number().required(),
  devices: Yup.string().required(),
})

const Contact = () => {
  return (
    <Section id="contacts">
      <Formik
        validationSchema={schema}
        initialValues={{
          fullName: '',
          whatsapp: '',
          email: '',
          instagram: '',
          revenues: '',
          devices: '',
        }}
      >
        {({ errors }) => (
          <Form>
            <Container>
              <TextArea>
                <Icon>
                  <RiArrowDownDoubleLine />
                </Icon>
                <Title>Preencha o formulario e aproveite agora</Title>
              </TextArea>
              <Input name="fullName" type="text" placeholder="Nome Completo" />
              {errors.fullName && (
                <ErrorMessage>Campo obrigatótio</ErrorMessage>
              )}
              <Input name="email" type="text" placeholder="E-Mail" />
              {errors.email && <ErrorMessage>Campo obrigatótio</ErrorMessage>}
              <Input
                name="whatsapp"
                type="text"
                placeholder="Insira o numero do Whatsapp"
              />
              {errors.whatsapp && (
                <ErrorMessage>Campo obrigatótio</ErrorMessage>
              )}
              <Input name="instagram" type="text" placeholder="Instagram" />
              {errors.instagram && (
                <ErrorMessage>Campo obrigatótio</ErrorMessage>
              )}
              <Input name="revenues" type="text" placeholder="Faturamento" />
              {errors.revenues && (
                <ErrorMessage>Campo obrigatótio</ErrorMessage>
              )}
              <Input
                name="devices"
                type="text"
                placeholder="Trabalha com cardapio ou balanca?"
              />
              {errors.devices && <ErrorMessage>Campo obrigatótio</ErrorMessage>}
              <Button>Quero Falar com Especialista</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Section>
  )
}
export { Contact }
