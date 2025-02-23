import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Skills from "./Skills";

const AboutAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-32 h-24">
      {/* Overlay + About Box */}
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsVisible(false)} // Click to close
            />

            {/* About Me Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              className="w-[1200px] h-[600px] bg-gray-600 p-6 rounded-xl shadow-xl z-50 fixed top-1 left-[10%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-gray-900"
            >
              <button
                className="mt-6 ml-[1000px] w-4 rounded-lg text-white font-semibold"
                onClick={() => setIsVisible(false)}
              >
                <img src="src/assets/cross-close-svgrepo-com.svg" alt="hel" />
              </button>
              <div className="flex w-[1000px] h-[500]">
                <div className="left flex flex-col w-[600px]">
                  <h2 className="text-2xl font-bold mb-4 text-center text-sky-600">
                    About Me
                  </h2>
                  <p className="text-white">
                    Hi, my name is Abhishek Sharma, a passionate MERN Stack
                    Developer with a strong enthusiasm for building scalable and
                    efficient web applications. I specialize in MongoDB,
                    Express.js, React.js, and Node.js, creating seamless
                    full-stack applications with great user experiences. My goal
                    is to develop innovative and impactful solutions by
                    combining modern web technologies with clean and efficient
                    code.
                  </p>
                  <div>
                    <Skills/>
                  </div>
                </div>
                <div className="right md:display">
                  <img src="src/assets/home-right.png" alt="" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        className="bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-lg relative z-10"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {!isVisible && "About me"}
        {!isVisible && <img src="src/assets/right-arrow-svgrepo-com.svg" className="w-4 ml-14" alt="" />}
      </motion.button>
    </div>
  );
};

export default AboutAnimation;
