import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideSocials = ({ className }) => {
  return (
    <div className={className}>
      <div className="px-4 py-6 font-bold flex flex-col gap-6 text-offWhite">
        <NavLink to="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <div className="w-8 sm:w-10 lg:w-12">
            <FaGithub className="w-full h-full hover:text-leafGreen hover:scale-110 transition-transform duration-200" />
          </div>
        </NavLink>

        <NavLink to="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <div className="w-8 sm:w-10 lg:w-12">
            <FaLinkedin className="w-full h-full hover:text-leafGreen hover:scale-110 transition-transform duration-200" />
          </div>
        </NavLink>

        <NavLink to="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <div className="w-8 sm:w-10 lg:w-12">
            <FaTwitter className="w-full h-full hover:text-leafGreen hover:scale-110 transition-transform duration-200" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideSocials;