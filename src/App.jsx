import HeroSection from "./Componentes/HeroSection"
import CaractSection from "./Componentes/CaractSection"
import NavBar from "./Componentes/NavBar"
import Footer from "./Componentes/Footer"
import { cR, cT } from "./Assets/constantes"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SobreMi from "./Componentes/SobreMi.jsx"

function App() {
  const [pagina, setPagina] = useState('inicio')
  return (
    <BrowserRouter>
      <NavBar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection id="inicio"/>} />
          <Route path="/react" element={<CaractSection title="React" caracts={cR} id="react"/>} />
          <Route path="/tailwind" element={ <CaractSection title="TailwindCSS" caracts={cT} id="tailwind"/>} />
          <Route path="/about" element={<SobreMi/>} />
        </Routes>     
      </main>    
      <Footer />  
    </BrowserRouter>
  )
}

export default App
