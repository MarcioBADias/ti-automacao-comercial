import React, { useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  Section,
  Title,
  TextArea,
} from './styles'
import { RiArrowDownDoubleLine } from 'react-icons/ri'
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
  const formRef = useRef()

  const sendMail = (values) => {
    var templateParans = {
      fullname: values.fullName,
      whatsapp: values.whatsapp,
      email: values.email,
      instagram: values.instagram,
    }
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParans,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Formulário enviado com sucesso!')
          resetForm()
        },
        (error) => {
          alert('Erro ao enviar o formulário: ' + error.text)
        }
      )
      console.log(templateParans)
  }

  const handleSubmit = (values, { resetForm }) => {
    sendMail(values)
    const message = `Olá, me chamo ${values.fullName} ! Gostaria de mais informações. Seguem meus dados:
        
    *Nome:* ${values.fullName}
    *WhatsApp:* ${values.whatsapp}
    *E-mail:* ${values.email}
    *Instagram:* ${values.instagram}`;
      
    const phoneNumber = "5521996526895";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    resetForm();
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
          <Form ref={formRef}>
            <Container>
              <TextArea>
                <Icon>
                  <RiArrowDownDoubleLine />
                </Icon>
                <Title>Preencha o formulário e aproveite!</Title>
              </TextArea>

              <Field as={Input} name="fullName" type="text" placeholder="Nome Completo" />
              {errors.fullName && touched.fullName && (
                <ErrorMessage>{errors.fullName}</ErrorMessage>
              )}

              <Field as={Input} name="email" type="text" placeholder="E-Mail" />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <Field as={Input} name="whatsapp" type="text" placeholder="Insira o número do Whatsapp" />
              {errors.whatsapp && touched.whatsapp && (
                <ErrorMessage>{errors.whatsapp}</ErrorMessage>
              )}

              <Field as={Input} name="instagram" type="text" placeholder="Instagram" />
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
