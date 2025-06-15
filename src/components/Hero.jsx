import myimage from "../assets/ezat.jpeg";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={myimage}
            alt="My Picture"
            className="w-[180px] cursor-pointer rounded-full shadow-md shadow-indigo-900 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:shadow-indigo-600 md:w-[230px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Hi, I'm Ezatullah
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Front-end Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a passionate front-end web developer skilled in Reactjs, Nextjs,
            and Tailwind CSS. lets build something great together 😎!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
