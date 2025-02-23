import projects from "../constants/projectData"
import ProjectCard from "./ProjectCard"

const Projects = () => {

   

  return (
    <div className="p-10 bg-black min-h-screen">
  <div className="w-10/12 mx-auto">
  <h1 className="text-3xl text-white font-bold text-center mb-6">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">  
      {projects.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  </div>
  
  </div>
  )
}

export default Projects

// project rhega 4 project 
// project ko laptop me rkhane ke baad uske niche uska discription rhega 
// aur laptop screen par grid 2col 2 row 
