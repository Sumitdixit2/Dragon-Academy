import { Navbar } from './components/NavigationMenu/NavigationMenu'
import Hero from './components/Hero/Hero'
import KeyInitiative from './components/KeyInitiative/KeyInitiative'
import Journey from './components/ourJourney/Journey'
import Trust from './components/Trust/Trust'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import Loading from "./components/Loading/Loading"
import About from './components/About/About'


function App() {

  const [loading , setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  },[])

  return !loading? (
    <>
 <Navbar/>
 <Hero/>
 <KeyInitiative/>
 <About/>
 <Journey/>
 <Trust/>
 <Gallery/>
 <Contact/>
 <Footer/>
    </>
  ):<Loading/>

}

export default App
