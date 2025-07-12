import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
  FaSlack,
} from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
        <div className="bg-stone-300 py-4">
      <h2 className="text-2xl text-center">Skills and Languages</h2>
      <div className="grid grid-cols-4 gap-4 justify-items-center my-6 text-black">
        <FaHtml5 className="text-5xl hover:text-orange-500 transition" />
        <FaCss3Alt className="text-5xl hover:text-blue-500 transition" />
        <FaJs className="text-5xl hover:text-yellow-400 transition" />
        <FaReact className="text-5xl hover:text-cyan-400 transition" />
        <FaVuejs className="text-5xl hover:text-green-400 transition" />
        <FaFigma className="text-5xl hover:text-pink-500 transition" />
        <FaSlack className="text-5xl hover:text-purple-500 transition" />
        <SiTailwindcss className="text-5xl hover:text-cyan-400 transition" />
      </div>
    </div>
  )
}

export default Skills