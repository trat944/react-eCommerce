import { Navbar } from '../../components/Header'
import { LoginContainer } from '../../components/Login'
import { LoginImg } from '../../components/LoginImg'
import { Reviews } from '../../components/Reviews'
import { Footer } from '../../components/Footer'
import './login.css'

const Login = () =>  {

  return (
    <>
      <Navbar />
      <LoginImg />
      <LoginContainer />
      <Reviews />
      <Footer />
    </>
   
  )
}

export default Login;
