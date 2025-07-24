import { useState, useEffect } from "react";
import DarkHero from "../assets/DarkHero.jpg";
import LightHero from "../assets/LightHero.jpg";
import DLogo from "../assets/DLogo.svg?react";
import KHLogo from "../assets/KHLogo.svg?react";
import SideSocials from "./SideSocials";
import MoodToggle from "./MoodToggle";

const Hero = () => {
  const [mood, setMood] = useState("dark");

  const backgroundImage = mood === "dark" ? DarkHero : LightHero;

  useEffect(() => {
    const savedMood = localStorage.getItem("mood") || "dark";
    setMood(savedMood);
    document.documentElement.classList.toggle("dark", savedMood === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("mood", mood);
    if (mood === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mood]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-y-0 left-0 w-1/2 bg-white/30 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <DLogo className="h-[150px] md:h-[192px] lg:h-[230px] w-auto mix-blend-soft-light -mr-2" />
        <KHLogo className="h-[150px] md:h-[192px] lg:h-[230px] w-auto z-30" />
      </div>

      <SideSocials className="flex absolute z-100 top-1/2 left-0 -translate-y-1/2" />
      <MoodToggle mood={mood} setMood={setMood} />

      <div className="absolute bottom-8 w-full flex text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
        <div className="w-1/2 flex justify-center">
          <h1 className="text-black mix-blend-soft-light">Web Designer</h1>
        </div>
        <div className="w-1/2 flex justify-center">
          <h1 className="text-white">Web Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
