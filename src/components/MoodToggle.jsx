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
    <div className="absolute inset-0 flex items-end justify-center z-50 mb-40">
      <button
        onClick={handleToggle}
        className="w-fit px-4 py-3 text-xl rounded-full font-bold text-white bg-coastalTeal hover:bg-seafoamMist dark:bg-softFern dark:hover:bg-leafGreen transition duration-300"
      >
        Mood: {mood === "dark" ? "🍃 Dark" : "🌴 Light"}
      </button>
    </div>
  );
};

export default MoodToggle;