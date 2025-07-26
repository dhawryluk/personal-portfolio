import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  liveUrl,
  repoUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl group mb-8"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mistGrey hover:bg-offWhite p-1 rounded-full text-gray-700 shadow-md"
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mistGrey hover:bg-offWhite p-1 rounded-full text-gray-700 shadow-md"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
