
import './App.css'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Qualification from './components/qualification/qualification'
import Works from './components/work/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
function App() {
  
  return (
    <>
     
    
     <main className=' overflow-hidden '>
  <Header />

  <section id='Homepage'>
    <Home />
  </section>

  <section id='About'>
    <About />
  </section>

  <section id='Skills'>
    <Skills />
  </section>

  <Qualification />

  <section id='Portfolio'>
    <Works />
  </section>

  <section id='Contact'>
    <Contact />
  </section>
</main>
<Footer />

   
    </>
  )
}

export default App
