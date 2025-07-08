import image from "../assets/ezatabout.png";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 pt-16 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      <div className="flex flex-col items-center text-center md:w-1/3">
        <img
          src={image}
          alt="Ezatullah Ahmadi photo"
          className="w-50 h-50 rounded-full mt-16 object-cover shadow-lg"
        />
        <h2 className="mt-4 text-xl font-bold text-white">Ezatullah Ahmadi</h2>
        <h3 className="text-lg text-white">Front-end web Developer</h3>
        <p className="text-gray-300 italic text-sm max-w-xs">
          Building beautiful, user friendly web experiences.
        </p>
        <h4 className="text-gray-400 mt-4">
          Open to freelance and full time opportunities
        </h4>
        <div className="mt-8 flex gap-8 text-white">
          <a
            href="https://github.com/Ahmadi104"
            className="flex flex-col items-center text-3xl opacity-70 transition-all duration-300 hover:text-indigo-400 hover:opacity-100"
          >
            <i className="">
              <BsGithub />
            </i>
            <span className="text-sm mt-1">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ezatullah-ahmadi"
            className="flex flex-col items-center text-3xl opacity-70 transition-all duration-300 hover:text-indigo-400 hover:opacity-100"
          >
            <i className="">
              <BsLinkedin />
            </i>
            <span className="text-sm mt-1">Linkedin</span>
          </a>
          <a
            href="https://t.me/ezat_120"
            className="flex flex-col items-center text-3xl opacity-70 transition-all duration-300 hover:text-indigo-400 hover:opacity-100"
          >
            <i className="">
              <BsTelegram />
            </i>
            <span className="text-sm mt-1">Telegram</span>
          </a>
        </div>
      </div>

      <div className="md:w-2/3 space-y-6">
        <h1 className="text-2xl mt-10 md:mt-16 font-light text-white md:text-5xl">
          Let Me Introduce Myself
        </h1>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 leading-relaxed"
        >
          Hello 👋 ! I'm Ezatullah Ahmadi. I hold a{" "}
          <span className="font-bold">
            Bachelor’s degree in Computer Science
          </span>{" "}
          from <span className="font-bold">Herat University</span>, where I
          developed a solid understanding of web technologies and design
          principles. My expertise lies in using
          <span className="font-bold text-lg">
            {" "}
            React.js, Next.js Tailwind CSS
          </span>
          , and other modern tools to transform ideas into clean, interactive,
          and efficient digital experiences. I thrive on writing clean code,
          solving real-world problems, and continuously improving my skills to
          stay current with the latest trends in web development. I’m excited to
          contribute to projects that make a meaningful impact.
        </motion.div>

        <a
          href="/Ezatullah's CV3.pdf"
          className="inline-block rounded-lg border border-indigo-600 px-4 py-2 text-white shadow-md shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-indigo-900 hover:shadow-indigo-600"
        >
          Download CV
        </a>

        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Interests</h3>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Front-End Development</li>

              <li>Learning New Technologies</li>
              <li>Solving Coding Challenges</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Education</h3>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Bachelor of Computer Science</li>
              <li>Graduated: 2024</li>
              <li>Focus: Web Development, React.js, Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
