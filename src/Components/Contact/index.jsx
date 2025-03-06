import React from 'react';
import { RiArrowDownDoubleLine } from 'react-icons/ri';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { db, collection, addDoc } from '../../firebase';
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  Section,
  Title,
  TextArea,
} from './styles';
import { Icon } from './styles';

const schema = Yup.object().shape({
  fullName: Yup.string().required("Campo obrigatório"),
  whatsapp: Yup.string().matches(/^\d{11}$/, "Deve ter 11 dígitos").required("Campo obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  instagram: Yup.string().required("Campo obrigatório"),
  revenues: Yup.number().required("Campo obrigatório"),
  devices: Yup.string().required("Campo obrigatório"),
});

const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(db, "contacts"), values);
      alert("Dados enviados para o Firebase!");
      resetForm();
    } catch (error) {
      alert("Erro ao enviar dados.");
      console.error("Erro Firebase:", error);
    }
  };

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
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Container>
              <TextArea>
                <Icon>
                  <RiArrowDownDoubleLine />
                </Icon>
                <Title>Preencha o formulário e aproveite agora</Title>
              </TextArea>
              
              <Field as={Input} name="fullName" type="text" placeholder="Nome Completo" />
              {errors.fullName && touched.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

              <Field as={Input} name="email" type="text" placeholder="E-Mail" />
              {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}

              <Field as={Input} name="whatsapp" type="text" placeholder="Insira o número do Whatsapp" />
              {errors.whatsapp && touched.whatsapp && <ErrorMessage>{errors.whatsapp}</ErrorMessage>}

              <Field as={Input} name="instagram" type="text" placeholder="Instagram" />
              {errors.instagram && touched.instagram && <ErrorMessage>{errors.instagram}</ErrorMessage>}

              <Field as={Input} name="revenues" type="text" placeholder="Faturamento" />
              {errors.revenues && touched.revenues && <ErrorMessage>{errors.revenues}</ErrorMessage>}

              <Field as={Input} name="devices" type="text" placeholder="Trabalha com cardápio ou balança?" />
              {errors.devices && touched.devices && <ErrorMessage>{errors.devices}</ErrorMessage>}

              <Button type="submit">Quero Falar com Especialista</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export { Contact };
