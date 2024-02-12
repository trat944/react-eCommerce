import './header.css';

const displayNavbar = () => {
  const links = document.querySelectorAll(".navBarLink") as NodeListOf<Element>;
  links.forEach(link => {
    if (link.classList.contains('block'))  {
      link.classList.add('none');
      link.classList.remove('block');
    }
    else if (link.classList.contains('none')) {
      link.classList.remove('none');
      link.classList.add('block');
    };
  })
}

export const Navbar = () => {
  return (
  <div className="header">
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