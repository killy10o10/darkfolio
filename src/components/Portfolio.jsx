import projectCard from "/projectCard.svg";
import { nanoid } from "nanoid";

function Portfolio() {

  const projects = [
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project'
    },
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project'
    },
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project'
    },
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project'
    },
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project'
    },
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project'
    }
  ];

const projectsElement = projects.map((project) => {
  return(
          <div key={nanoid()}>
              <img src={project.image} alt={project.name} />
          </div>
  )
})

  return (
   <section className="grid md:grid-cols-2 gap-10 p-5 items-center justify-center min-h-screen before:absolute before:h-2/5 before:w-1/3 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/5 after:w-2/5 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10">
      {projectsElement}
   </section>
  )
}

export default Portfolio
