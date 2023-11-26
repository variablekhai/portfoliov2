import "./App.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20 pb-xs max-w-content mx-auto">
        <nav className="pt-1 mb-20 md:mb-[120px] md:pt-6 relative ml-auto">
          <div
          className="flex gap-8 text-lg tracking-normal leading-none pt-5 md:pt-1">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/khairul-azfar-39950b23a/"
              className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#c6f459] before:absolute before:left-0 before:top-6" rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#c6f459] before:absolute before:left-0 before:top-6"
            >
              Projects
            </a>
          </div>
        </nav>
        <div className="flex flex-col w-full">
          <div className="md:ml-16">
            <h1 className="wave mb-2 max-w-[290px] sm:max-w-[520px] md:ml-16 transition-all duration-300">
              <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="block text-8xl font-extrabold">Hey,</motion.span>
              <motion.span 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="block text-8xl font-extrabold mt-4">
                I&rsquo;m Khairul
              </motion.span>
            </h1>
          </div>
          <div className="mt-4">
            <motion.h2 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "tween", ease: "easeOut" }}
            className="text-2xl md:text-4xl font-medium sm:max-w-[780px] ml-6 md:ml-96 transition-all duration-300">
              — a software engineer with passion for building and a tech
              enthusiast with deep interest in{" "}
              <TypeAnimation
                sequence={[
                  1500,
                  "modern web dev.",
                  2000,
                  "data.",
                  2000,
                  "artificial intelignce.",
                  100,
                  "artificial intelligence.",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ color: "#97dcc7", display: "inline-block" }}
              />
            </motion.h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
