import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";
import About from "./components/About";
import ThankYou from "./components/ThankYou";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(110%_140%_at_50%_30%,#000_40%,#63c_90%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ThankYou" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
