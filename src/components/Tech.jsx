import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

function Tech() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="tech"
      className="flex min-h-screen w-full flex-col items-center justify-start gap-4 md:gap-32 pt-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-2xl font-light text-white md:text-5xl sm:text-3xl"
      >
        Technologies and Tools
      </motion.h1>
      <motion.p
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-white text-xl text-center sm:text-lg mt-0"
      >
        Here are the technologies and tools I’ve been working <br />
        with recently to build responsive and scalable web applications.
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">HTML</span>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">CSS</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BiLogoBootstrap className="cursor-pointer text-[80px] text-indigo-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">Bootstrap</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">TailwindCSS</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">JavaScript</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">Reactjs</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ opacity: 0.5 }}
          className="text-center"
        >
          <SiNextdotjs className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">Nextjs</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ opacity: 0.5 }}
          className="text-center"
        >
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">TypeScript</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ opacity: 0.5 }}
          className="text-center"
        >
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">Mongodb</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ opacity: 0.5 }}
          className="text-center"
        >
          <BiLogoGit className="cursor-pointer text-[80px] text-amber-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">Git</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ opacity: 0.5 }}
          className="text-center"
        >
          <BiLogoGithub className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-white text-xl">Github</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;
