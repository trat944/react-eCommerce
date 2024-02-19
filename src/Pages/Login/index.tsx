import { LoginContainer } from './components/Login'
import { LoginImg } from './components/LoginImg'
import { Reviews } from '../../components/common/Reviews'
import { PageLayout } from '../../components/layout/Pagelayout'
import './login.css'

const Login = () =>  {
  return (
     <PageLayout>
       <LoginImg />
        <LoginContainer />
        <Reviews />
     </PageLayout>
  )
}
export default Login;
