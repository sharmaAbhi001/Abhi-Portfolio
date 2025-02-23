const Skills = () => {
    const skills = [
      "# React.js", 
      "# Redux", 
      "# Tailwind CSS", 
      "# Node.js", 
      "# Express.js", 
      "# MongoDB", 
      "# Git",
      "#Javascript",
      "#C",
      "#C++",
      "#Socket.io"
    ];
  
    return (
      <div className="flex flex-wrap gap-4 pt-4 justify-center">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 rounded-full border border-white/50 text-white bg-white/10 backdrop-blur-md 
                       hover:bg-white/20 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    );
  };
  
  export default Skills;
  