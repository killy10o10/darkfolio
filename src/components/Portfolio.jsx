import { BsBoxArrowInUpRight, BsGithub} from 'react-icons/bs';
import { projects } from '../../projects';
import { nanoid } from 'nanoid';

function Portfolio() {
  const projectsElement = projects.map((project) => {
    const dynamicCardStyle = {
      height: '226px',
      background: `url(${project.image}) center /cover`,
    };
    return (
      <div
        style={dynamicCardStyle}
        className="md:w-[362px] w-[330px] grayscale hover:grayscale-0 transition duration-700 shadow rounded-2xl"
        key={nanoid()}
      >
        <div className="w-full h-full flex flex-col items-center text-slate-950 p-4 justify-center text-center bg-dark-yellow dark:bg-light-yellow opacity-0 hover:opacity-90 transition-all duration-500 delay-700 rounded-2xl">
          <small>{project.description}</small>
          <div className="flex items-center mt-auto text-2xl gap-4">
            <a href={project.sourceLink} className="transition-all duration-500 ease-in-out hover:scale-150" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href={project.liveLink} className="transition-all duration-500 ease-in-out hover:scale-150" target="_blank" rel="noreferrer"><BsBoxArrowInUpRight /> </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="projects" className="grid md:grid-cols-2 gap-10 p-5 mb-10 items-center justify-center relative">
      <div className="absolute top-1/4 left-2/4 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-2/4 left-1/3 w-80 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      {projectsElement}
    </section>
  );
}

export default Portfolio;
