const MoodToggle = ({ mood, setMood }) => {
  const handleToggle = () => {
    setMood(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="absolute inset-0 flex items-end justify-center z-50 mb-70">
      <button
        onClick={handleToggle}
        className="w-fit px-4 py-3 text-xl rounded-full font-bold text-white bg-softFern hover:bg-leafGreen transition duration-300"
      >
        Mood: {mood === "dark" ? "🌙 Dark" : "🌞 Light"}
      </button>
    </div>
  );
};

export default MoodToggle;