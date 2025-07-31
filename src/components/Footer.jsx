import DarkHero from "../assets/DarkHero.jpg";
import LightHero from "../assets/LightHero.jpg";

const Footer = ({ mood }) => {
  const backgroundImage = mood === "dark" ? DarkHero : LightHero;

  return (
    <footer
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="relative bg-cover bg-center text-coastalTeal dark:text-offWhite py-8 px-6 mt-12 shadow-inner"
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-base font-semibold text-center sm:text-left">
        <p className="drop-shadow-md">
          &copy; {new Date().getFullYear()} Derek Hawryluk's Professional
          Portfolio
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/derek-hawryluk/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/dhawryluk"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            X (Twitter)
          </a>
          <a
            href="https://github.com/dhawryluk"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
