import AboutAnimation from "./AboutAnimation";
import WaterTexture from "./WaterTexture"; 

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
    {/* Water Effect Background */}
    <div className="absolute inset-0 -z-10">
      <WaterTexture />
    </div>

    {/* Hero Content */}
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center px-6 text-center md:text-left">
      
      {/* Left Section */}
      <div className="text-white space-y-4 w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold">Abhishek Sharma</h1>
        <span className="text-lg md:text-xl text-gray-300">
          MERN Stack Developer
        </span>
        <div className="md:mx-auto">
        <AboutAnimation />
        </div>
        <div className="flex space-x-6">
        <a href="https://github.com/sharmaAbhi001" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/github-icon-1-logo-svgrepo-com.svg" className="w-14 bg-blue-700 rounded-full p-2" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/codeburnerabhi/" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/icons8-linkedin.svg" className="w-14 bg-blue-700 rounded-full p-2" alt="LinkedIn" />
        </a>
      </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img 
          src="src/assets/name_log-removebg-preview.png" 
          className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-auto"
          alt="Logo"
        />
      </div>
    </div>
  </div>
  );
};

export default Hero;


