


const ProjectCard = (data) => {
 
    const {title,description,technologies,image,link} = data.data;    
  return (
    <div className="bg-gray-800  text-white rounded-lg p-4 shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-sm mt-1">{description}</p>
      <div className="flex flex-wrap mt-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" className="block mt-3 text-blue-400 underline">View Project</a>
    </div>
  )
}

export default ProjectCard
