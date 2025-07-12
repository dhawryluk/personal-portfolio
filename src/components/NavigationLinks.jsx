import { NavLink } from "react-router-dom";

const NavigationLinks = ({ closeMenu }) => {
    const linkStyles = "hover:text-leafGreen md:offWhite ease-in duration-200";
  return (
       <>
      <NavLink to="/" className={linkStyles} onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/About" className={linkStyles} onClick={closeMenu}>
        About
      </NavLink>
      <NavLink to="Projects" className={linkStyles} onClick={closeMenu}>
        Projects
      </NavLink>
      <NavLink to="Skills" className={linkStyles} onClick={closeMenu}>
        Skills
      </NavLink>
      <NavLink to="Contact" className={linkStyles} onClick={closeMenu}>
        Contact
      </NavLink>
    </>
  )
}

export default NavigationLinks