import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SideSocials = ({ className }) => {
  return (
    <div className={className}>
      <div className="px-4 py-6 font-bold flex flex-col gap-6 text-offWhite">
        <a
          href="https://github.com/dhawryluk"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaGithub className="w-10 h-10 hover:text-coastalTeal dark:hover:text-softFern hover:scale-110 transition-transform duration-200" />
        </a>

        <a
          href="https://www.linkedin.com/in/derek-hawryluk/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin className="w-10 h-10 hover:text-coastalTeal dark:hover:text-softFern hover:scale-110 transition-transform duration-200" />
        </a>

        <a
          href="https://x.com/derek_hawryluk"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaTwitter className="w-10 h-10 hover:text-coastalTeal dark:hover:text-softFern hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default SideSocials;
