import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Features } from './Components/Features'
import Testimonials from './Components/Testimonials'
import { Pricing } from './Components/Pricing'
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
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}

export { App }
