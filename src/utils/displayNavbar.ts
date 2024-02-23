export const displayNavbar = () => {
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