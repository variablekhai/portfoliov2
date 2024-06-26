import "./App.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20 pb-xs max-w-content mx-auto">
        <nav className="pt-1 mb-20 md:mb-[120px] md:pt-6 relative ml-auto">
          <div className="flex gap-8 text-lg tracking-normal leading-none pt-5 md:pt-1">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/khairul-azfar-39950b23a/"
              className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 before:absolute before:left-0 before:top-6"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>
        <div className="flex flex-col w-full">
          <div>
            <p className="wave mb-2 max-w-[290px] sm:max-w-[520px] lg:ml-16 transition-all duration-300">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 11,
                  mass: 0.3,
                }}
                className="block text-6xl md:text-8xl font-extrabold"
              >
                Hey,{" "}
                <motion.span
                  animate={{
                    rotate: [0, 20, -20, 20, -20, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                >
                  👋
                </motion.span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 11,
                  mass: 0.3,
                }}
                className="block text-6xl md:text-8xl font-extrabold mt-4"
              >
                I&rsquo;m Khairul
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
                className="mt-2 text-2xl md:text-4xl font-medium sm:max-w-[780px] ml-6 md:ml-24 lg:ml-96 transition-all duration-300 lg:w-full"
              >
                — software engineer passionate about building and a tech enthusiast with interests in{" "}
                <TypeAnimation
                  sequence={[
                    1000,
                    "web tech.",
                    1500,
                    "data.",
                    1500,
                    "AI/ML.",
                    1500,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    backgroundImage: "linear-gradient(to right, #EC4899, #8B5CF6, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    wordBreak: "break-all",
                  }}
                />
              </motion.h2>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;