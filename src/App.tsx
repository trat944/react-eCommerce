import { Navbar } from './components/Header'
import { Login } from './components/Login'
import { LoginImg } from './components/LoginImg'
import { Characteristics } from './components/Characteristics'
import { Reviews } from './components/Reviews'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <LoginImg />
      <Login />
      <Characteristics />
      <Reviews />
      <Footer />
    </>
   
  )
}

export default App
