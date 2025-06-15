// import { ScrollReveal } from "./Project";
import image from "../assets/ezat.jpeg";
// function About() {
//   return (
//     <section id="about" className="flex min-h-screen items-center ">
//       <div className="w-full p-12 text-center space-y-8">
//         <ScrollReveal>
//           <h2 className="text-2xl font-light mb-24 mt-16 text-white md:text-5xl">
//             Who I Am
//           </h2>
//         </ScrollReveal>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <img
//             src={image}
//             alt=""
//             className="w-[400px] h-[400px] rounded-2xl "
//           />
//           <p className="text-lg text-gray-300">
//             I’m a Front-End Developer with a passion for crafting clean and
//             responsive user interfaces. I specialize in building modern web
//             applications using React, Next.js, and Tailwind CSS. My core tech
//             stack includes React, Next.js, Tailwind CSS, and JavaScript. I'm
//             also comfortable working with Git and responsive design techniques.
//             I enjoy turning complex problems into simple, beautiful, and
//             intuitive designs. I’m constantly learning and love collaborating
//             with others to create great digital experiences.
//           </p>
//         </div>
//         <div>
//           <a
//             href="#projects"
//             className="inline-block rounded-lg border border-pink-500 bg-transparent px-6 py-3 text-lg font-semibold text-pink-500 shadow-md transition-all duration-300 hover:bg-pink-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/50"
//           >
//             See My Projects
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Left: Profile Info */}
      <div className="flex flex-col items-center text-center md:w-1/3">
        <img
          src={image}
          alt="Your Photo"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <h2 className="mt-4 text-xl font-bold">Ezatullah</h2>
        <h3 className="text-lg text-white">Front end Developer</h3>
        {/* <p className="text-sm text-gray-400">Your Organization</p> */}

        {/* Social Icons (optional) */}
        <div className="mt-4 flex gap-3 text-xl text-white">
          <a href="#">
            <i className="fab fa-github">Github</i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin">Linkedin</i>
          </a>
          <a href="#">
            <i className="fab fa-twitter">Telegram</i>
          </a>
        </div>
      </div>

      {/* Right: About Text */}
      <div className="md:w-2/3 space-y-6">
        <h1 className="text-2xl mt-16 font-light text-white md:text-5xl">
          Let Me Introduce Myself
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Hello 👋 ! I'm Ezatullah Ahmadi, a passionate Front-End Developer with
          a strong foundation in building modern, responsive web applications. I
          hold a{" "}
          <span className="font-bold">
            Bachelor’s degree in Computer Science
          </span>{" "}
          from Herat University, where I developed a solid understanding of web
          technologies and design principles. My expertise lies in using
          <span className="font-bold"> React.js, Next.js Tailwind CSS</span>,
          and other modern tools to transform ideas into clean, interactive, and
          efficient digital experiences. I thrive on writing clean code, solving
          real-world problems, and continuously improving my skills to stay
          current with the latest trends in web development. I’m excited to
          contribute to projects that make a meaningful impact.
        </p>

        <a
          href="/Ezatullah's CV3.pdf"
          className="inline-block rounded-lg border border-indigo-600 px-4 py-2 text-white shadow-md shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-indigo-900 hover:shadow-indigo-600"
        >
          Download CV
        </a>

        {/* Interests & Education */}
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Interests</h3>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Front-End Development</li>

              <li>React, Next.js & Tailwind</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Education</h3>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>BSc in Computer Science</li>
              <li>React Certification</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
