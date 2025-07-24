const NavigationLinks = ({ closeMenu }) => {
  const linkStyles =
    "hover:text-coastalTeal dark:hover:text-softFern text-offWhite ease-in duration-200";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ id, label }) => (
        <ul>
          <li key={id}>
            <button onClick={() => scrollToSection(id)} className={linkStyles}>
              {label}
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default NavigationLinks;
