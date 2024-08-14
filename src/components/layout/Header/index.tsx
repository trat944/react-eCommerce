import { useContext } from 'react';
import './header.css';
import { UserContext } from '../../../hooks/useContextUser';
import { Link } from 'react-router-dom';
import { displayNavbar } from '../../../utils/displayNavbar';

export const Navbar = () => {
  const user = useContext(UserContext);
  const { dispatch } = useContext(UserContext);

  const logoutFunction = () => { 
    dispatch({ type: 'LOGOUT' });
  }

  return (
  <div className="header">
    <Link to={'/'}>
      {user.state.user && <button onClick={logoutFunction} className='logout-btn'>Logout</button>}
    </Link>
    <img className='logoImg' src="/logo.png" alt="" />

    {user.state.user && <div className="navbar">
      <div id="myLinks">
        <Link to="/homepage" className="navBarLink none">Homepage</Link>
        <Link to="/cart" className="navBarLink none">Cart</Link>
      </div>

      <a className="icon">
        <i className="fa fa-bars" onClick={displayNavbar}></i>
      </a>
    </div>}
  </div>
  )
}