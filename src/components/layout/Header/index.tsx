import { useContext } from 'react';
import './header.css';
import { UserContext } from '../../../hooks/useContextUser';
import { Link } from 'react-router-dom';
import { displayNavbar } from '../../../utils/displayNavbar';
import { logoutFunction } from '../../../utils/logoutFunction';

export const Navbar = () => {
  const user = useContext(UserContext);

  return (
  <div className="header">
    <Link to={'/'}>
      {user.state.user && <button onClick={() => logoutFunction(user.state.user)} className='logout-btn'>Logout</button>}
    </Link>
    <img className='logoImg' src="/src/assets/logo.png" alt="" />

    <div className="navbar">
      <div id="myLinks">
        <a className="navBarLink none" href="#news">News</a>
        <a className="navBarLink none" href="#contact">Contact</a>
        <a className="navBarLink none" href="#about">About</a>
      </div>

      <a className="icon">
        <i className="fa fa-bars" onClick={displayNavbar}></i>
      </a>
    </div>
  </div>
  )
}