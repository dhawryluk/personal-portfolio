import DarkHero from "../assets/DarkHero.jpg";
import LightHero from "../assets/LightHero.jpg";

const Footer = () => {
  const mood = localStorage.getItem("mood") || "dark";
  const backgroundImage = mood === "dark" ? DarkHero : LightHero;

  return (
    <footer
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center text-driftwoodBeige dark:text-offWhite py-6 px-4 mt-12 shadow-inner"
    >
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Derek Hawryluk's Professional Portfolio</p>
        <div className="flex gap-4">
          <a href="#contact" className="hover:text-seafoamMist dark:hover:text-leafGreen transition">
            Contact
          </a>
          <a href="#about" className="hover:text-seafoamMist dark:hover:text-leafGreen transition">
            About
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-seafoamMist dark:hover:text-leafGreen transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;