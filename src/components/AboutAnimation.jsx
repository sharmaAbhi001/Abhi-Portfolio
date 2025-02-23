import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Skills from "./Skills";
import closeIcon from "/assets/cross-close-svgrepo-com.svg";
import homeRight from "/assets/home-right.png";
import rightArrow from "/assets/right-arrow-svgrepo-com.svg";

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
              className=" md:ml-0 w-[440px] md:w-[1200px] h-[600px] bg-gray-600 p-6 rounded-xl shadow-xl z-50 md:fixed relative top-1 left-[10%] transform -translate-x-1/2 -translate-y-1/2 flex md:flex-col items-center text-gray-900"
            >
              <button
                className="absolute top-4 right-4 w-6 h-6 bg-gray-800 p-1 rounded-full text-white"
                onClick={() => setIsVisible(false)}
              >
                <img src={closeIcon} alt="Close" />
              </button>

              <div className="flex w-full h-full">
                {/* Left Content */}
                <div className="flex flex-col w-1/2 p-4">
                  <h2 className="text-2xl font-bold mb-4 text-center text-sky-600">
                    About Me
                  </h2>
                  <p className="text-white">
                    Hi, my name is Abhishek Sharma, a passionate MERN Stack
                    Developer with a strong enthusiasm for building scalable and
                    efficient web applications. I specialize in MongoDB,
                    Express.js, React.js, and Node.js, creating seamless
                    full-stack applications with great user experiences.
                  </p>
                  <div className="mt-4 hidden md:block">
                    <Skills />
                  </div>
                </div>

                {/* Right Image */}
                <div className="  md:w-1/2 flex items-center justify-center">
                  <img
                    src={homeRight}
                    alt="Home Right"
                    className=" w-36 md:max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        className="bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-lg flex items-center"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ scale: 0.95 }}
      >
        {!isVisible && "About me"}
        {!isVisible && (
          <img src={rightArrow} className="w-4 ml-2" alt="Arrow" />
        )}
      </motion.button>
    </div>
  );
};

export default AboutAnimation;
