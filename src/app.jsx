import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Features } from './Components/Features'
import { Testimonials } from './Components/Testimonials'
import { Clients } from './Components/Clients'
import { Footer } from './Components/Footer'
import { Solutions } from './Components/Solutions'
import { Services } from './Components/Services'

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
    </main>
  )
}

export { App }
