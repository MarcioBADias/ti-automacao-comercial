import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Features } from './Components/Features'
import { Clients } from './Components/Clients'
import { Footer } from './Components/Footer'
import { Solutions } from './Components/Solutions'
import { Services } from './Components/Services'
import { WhatsAppButton } from './Components/WatsAppBtn'

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Solutions />
      <Services />
      <Features />
      <Clients />
      <Footer />
      <WhatsAppButton 
        phoneNumber='5522999866001' 
        message='Olá gostaria de saber mais informações.' 
      />
    </main>
  )
}

export { App }
