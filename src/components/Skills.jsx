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
import {
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { BsStripe } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="bg-driftwoodBeige dark:bg-softFern py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coastalTeal dark:text-offWhite">
            Tools & Tech I Use
          </h2>

          <div className="space-y-6 text-black dark:text-offWhite text-lg leading-relaxed">
            <div>
              <h3 className="font-semibold text-xl mb-1">
                Languages & Frameworks
              </h3>
              <p>HTML • CSS • JavaScript • React • Vue.js • Nuxt.js</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-1">Styling & Design</h3>
              <p>Tailwind CSS • Figma</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-1">
                Back End & Services
              </h3>
              <p>Supabase • Vercel • Netlify • Render</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-1">Other Skills</h3>
              <p>
                UI/UX design • Responsive layout • Version control (Git) • Team
                collaboration • Customer-focused thinking
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 gap-8 md:gap-12 justify-items-center text-black dark:text-offWhite">
          <FaHtml5 className="text-5xl hover:text-orange-500 transition-transform hover:scale-110" />
          <FaCss3Alt className="text-5xl hover:text-blue-500 transition-transform hover:scale-110" />
          <FaJs className="text-5xl hover:text-yellow-400 transition-transform hover:scale-110" />
          <FaReact className="text-5xl hover:text-cyan-400 transition-transform hover:scale-110" />
          <FaVuejs className="text-5xl hover:text-green-400 transition-transform hover:scale-110" />
          <SiTailwindcss className="text-5xl hover:text-cyan-400 transition-transform hover:scale-110" />
          <FaFigma className="text-5xl hover:text-pink-500 transition-transform hover:scale-110" />
          <SiSupabase className="text-5xl hover:text-green-500 transition-transform hover:scale-110" />
          <SiVercel className="text-5xl hover:text-white transition-transform hover:scale-110" />
          <SiNetlify className="text-5xl hover:text-teal-500 transition-transform hover:scale-110" />
          <SiRender className="text-5xl hover:text-indigo-500 transition-transform hover:scale-110" />
          <BsStripe className="text-5xl hover:text-blue-500 transition-transform hover:scale-110" />
          <FaSlack className="text-5xl hover:text-purple-500 transition-transform hover:scale-110" />
          <FaShopify className="text-5xl hover:text-green-600 transition-transform hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
