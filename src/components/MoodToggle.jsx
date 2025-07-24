import palmTree from "../assets/icons8-palm-tree-48.png";
import leaf from "../assets/icons8-leaf-67.png";

const MoodToggle = ({ mood, setMood }) => {
  const handleToggle = () => {
    const newMood = mood === "dark" ? "light" : "dark";
    setMood(newMood);

    if (newMood === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="absolute inset-0 flex items-end justify-center z-50 mb-30">
      <button
        onClick={handleToggle}
        className="w-fit px-3 py-2 text-xl rounded-full font-bold text-white bg-seafoamMist hover:bg-coastalTeal dark:bg-softFern dark:hover:bg-leafGreen transition duration-300"
      >
        Mood:{" "}
        {mood === "dark" ? (
          <img src={leaf} alt="leaf" className="h-6 w-6 inline" />
        ) : (
          <img src={palmTree} alt="leaf" className="h-6 w-6 inline" />
        )}
      </button>
    </div>
  );
};

export default MoodToggle;
