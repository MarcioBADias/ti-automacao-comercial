import {
  TestimonialCard,
  TestimonialsContainer,
  TestimonialsWrapper,
} from './styles'

const Testimonials = () => {
  const testimonialsList = [
    {
      name: 'Fishbone',
      title: 'Boate',
      testimonial:
        'À TI Consultoria, agradecemos por nos conceder um trabalho de excelência nesses últimos anos, com proatividade, cordialidade e eficiência.',
    },
    {
      name: 'Outros 500',
      title: 'Restaurante',
      testimonial:
        'Sou super fã do trabalho de vocês, sempre dispostos a nos ajudar em tudo que precisamos. Competência e profissionalismo são o diferencial dessa empresa. Adoro e super indico! Vocês são indispensáveis na minha empresa.',
    },
    {
      name: 'Kazebre',
      title: 'bar',
      testimonial:
        'Nossa experiência no Kazebre com o sistema é muito boa. Um sistema confiável, muito completo e estável. A equipe de suporte e atendimento sempre muito atenciosos e prestativos, sempre apresentando soluções quando acionados. Certeza de que indico os serviços do sistema para os comércios que precisem.',
    },
  ]

  return (
    <TestimonialsContainer>
      <h2>O que nossos clientes dizem</h2>
      <TestimonialsWrapper>
        {testimonialsList.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <p>"{testimonial.testimonial}"</p>
            <h3>{testimonial.name}</h3>
            <span>{testimonial.title}</span>
          </TestimonialCard>
        ))}
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
