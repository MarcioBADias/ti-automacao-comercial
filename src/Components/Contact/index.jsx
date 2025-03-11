import React from 'react'
import { RiArrowDownDoubleLine } from 'react-icons/ri'
import { Formik, Form, Field } from 'formik'
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
  fullName: Yup.string().required('Campo obrigatório'),
  whatsapp: Yup.string()
    .matches(/^\d{11}$/, 'Deve ter 11 dígitos')
    .required('Campo obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  instagram: Yup.string().required('Campo obrigatório'),
})

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    const formData = new URLSearchParams(values).toString()

    fetch('https://formsubmit.co/ti_consultoria@hotmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('Formulário enviado com sucesso!')
          resetForm()
        } else {
          alert('Erro ao enviar o formulário.')
        }
      })
      .catch(() => alert('Erro na conexão com o servidor.'))
  }

  return (
    <Section id="contacts">
      <Formik
        validationSchema={schema}
        initialValues={{
          fullName: '',
          whatsapp: '',
          email: '',
          instagram: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Container>
              <TextArea>
                <Icon>
                  <RiArrowDownDoubleLine />
                </Icon>
                <Title>Preencha o formulário e aproveite!</Title>
              </TextArea>

              <Field
                as={Input}
                name="fullName"
                type="text"
                placeholder="Nome Completo"
              />
              {errors.fullName && touched.fullName && (
                <ErrorMessage>{errors.fullName}</ErrorMessage>
              )}

              <Field as={Input} name="email" type="text" placeholder="E-Mail" />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <Field
                as={Input}
                name="whatsapp"
                type="text"
                placeholder="Insira o número do Whatsapp"
              />
              {errors.whatsapp && touched.whatsapp && (
                <ErrorMessage>{errors.whatsapp}</ErrorMessage>
              )}

              <Field
                as={Input}
                name="instagram"
                type="text"
                placeholder="Instagram"
              />
              {errors.instagram && touched.instagram && (
                <ErrorMessage>{errors.instagram}</ErrorMessage>
              )}

              <Button type="submit">Quero Falar com Especialista</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Section>
  )
}

export { Contact }
