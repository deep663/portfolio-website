import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'

function App() {

  return (
      <div className='font-nunito'>
        <Header/>
        <Hero/>
        <WhatWeDo/>
        <About/>
        <Footer/>
      </div>
  )
}

export default App
