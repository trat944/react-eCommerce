
import { useContext } from 'react'
import './welcomeContainer.css'
import { UserContext } from '../../../../hooks/useContextUser'


export const WelcomeContainer = () => {

  const user = useContext(UserContext);

  return (
    <div className="welcome_container">
      <h2 className='welcome_msg'>Welcome home <span className='username'>{user.state.user?.name}</span>.</h2>
      <img className="welcome_img" src="/homepage_welcome.png" alt="Welcome image" />
    </div>
  )
}
