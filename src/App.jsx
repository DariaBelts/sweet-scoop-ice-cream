import Header from './components/Header'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Specials from './components/Specials'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Flavors />
        <Specials />
        <About />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
