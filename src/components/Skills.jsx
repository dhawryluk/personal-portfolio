import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
  FaSlack,
  FaShopify,
} from "react-icons/fa6";
import { SiTailwindcss, SiSupabase, SiVercel } from "react-icons/si";
import { BsStripe } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="bg-driftwoodBeige dark:bg-softFern py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-coastalTeal dark:text-offWhite">
        Skills and Languages
      </h2>
      <div className="w-1/2 m-auto grid grid-cols-4 gap-4 justify-items-center my-6 text-black">
        <FaHtml5 className="text-5xl hover:text-orange-500 transition" />
        <FaCss3Alt className="text-5xl hover:text-blue-500 transition" />
        <FaJs className="text-5xl hover:text-yellow-400 transition" />
        <FaReact className="text-5xl hover:text-cyan-400 transition" />
        <FaVuejs className="text-5xl hover:text-green-400 transition" />
        <FaFigma className="text-5xl hover:text-pink-500 transition" />
        <FaSlack className="text-5xl hover:text-purple-500 transition" />
        <SiTailwindcss className="text-5xl hover:text-cyan-400 transition" />
        <SiSupabase className="text-5xl hover:text-green-500 transition" />
        <SiVercel className="text-5xl hover:text-white transition" />
        <BsStripe className="text-5xl hover:text-blue-500 transition" />
        <FaShopify className="text-5xl hover:text-green-600 transition" />
      </div>
    </div>
  );
};

export default Skills;
