import { Children } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import { motion } from "framer-motion";
import { BiLogoGithub } from "react-icons/bi";
const projectsData = [
  {
    image: image1,
    title: "A simple store Project",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ipsam quam voluptas omnis placeat aliquid rerum modi consequatur ex optio quas amet quis, minima magnam",
    technologies: ["HTML", "Tailwindcss", "Nextjs"],
    github: "https://github.com/Ahmadi104/storeproject-nextjs.git",
  },
  {
    image: image2,
    title: "A greate todo-list app",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ipsam quam voluptas omnis placeat aliquid rerum modi consequatur ex optio quas amet quis, minima magnam",
    technologies: ["React js", "Tailwindcss"],
    github: "https://github.com/Ahmadi104/Todo-List.git",
  },
  {
    image: image3,
    title: "A simple blog website for your articles",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ipsam quam voluptas omnis placeat aliquid rerum modi consequatur ex optio quas amet quis, minima magnam",
    technologies: ["Nextjs", "tailwindcss", "JavaScript"],
    github: "https://github.com/Ahmadi104/Article-blog.git",
  },
  {
    image: image4,
    title: "Movie-search-app",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ipsam quam voluptas omnis placeat aliquid rerum modi consequatur ex optio quas amet quis, minima magnam",
    technologies: ["Reactjs", "CSS", "HTML"],
    github: "https://github.com/Ahmadi104/movie-search-app.git",
  },
];
export const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ opacity: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjctCart = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-indigo-800 text-white px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 text-indigo-400 hover:text-indigo-300 transition"
            >
              <BiLogoGithub className="text-2xl" />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};
const Project = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 pt-18"
    >
      <ScrollReveal>
        <h1 className="text-2xl font-light mb-8 mt-16 text-white md:text-5xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjctCart key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
