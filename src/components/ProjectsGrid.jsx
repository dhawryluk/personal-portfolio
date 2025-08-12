import ProjectCard from "./ProjectCard";
import Innova from "../assets/Innova.png";
import LostFound from "../assets/LostFound.png";
import Play from "../assets/4Play.png";

const projects = [
  {
    title: "Innova Electrical Contracting",
    description:
      "A professional site for an electrical contractor, showcasing past projects and offering easy contact options. Built with React and Vite, styled using Tailwind CSS, and deployed on Vercel for fast, modern performance.",
    techStack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    image: Innova,
    liveUrl: "https://innovaelectrical.com/",
    repoUrl: "https://github.com/dhawryluk/Innova-Electrical",
  },
  {
    title: "Lost & Found Creations",
    description:
      "A portfolio and storefront for a local carpenter to showcase and sell handcrafted woodwork. Built with Nuxt 3 and Vue 3, styled with Tailwind CSS, and deployed on Vercel for fast, responsive performance.",
    techStack: ["Nuxt3", "Vue3", "Tailwind CSS", "Vercel"],
    image: LostFound,
    liveUrl: "https://lostandfoundcreations.ca/",
    repoUrl: "https://github.com/dhawryluk/Lost-And-Found",
  },
  {
    title: "4Play.gg",
    description:
      "A platform for gaming and anime fans to connect, stay updated on the latest news, and purchase themed merchandise. Built with Nuxt 3 and Vue 3, styled using Tailwind CSS, with Supabase for backend services and Stripe for secure payments.",
    techStack: ["Nuxt3", "Vue3", "Tailwind CSS", "Supabase", "Stripe"],
    image: Play,
    liveUrl: "https://4play-azure-ten.vercel.app/",
    repoUrl: "https://github.com/dhawryluk/capstone",
  },
];

const ProjectsGrid = () => {
  return (
    <section className="px-8 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
