import { Navbar } from '../../components/Header'
import { LoginContainer } from '../../components/Login'
import { LoginImg } from '../../components/LoginImg'
import { Characteristics } from '../../components/Characteristics'
import { Reviews } from '../../components/Reviews'
import { Footer } from '../../components/Footer'
import './login.css'

const Login = () =>  {

  return (
    <>
      <Navbar />
      <LoginImg />
      <LoginContainer />
      <Characteristics />
      <Reviews />
      <Footer />
    </>
   
  )
}

export default Login;
