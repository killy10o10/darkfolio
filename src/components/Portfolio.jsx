import projectCard from '/projectCard.svg';
import music610 from '/610music.png';
import joyfulLearning from '/joyful-learning.png';
import vanlife from '/vanlife.png';
import muviWeb from '/muvi-webapp.png';
import countryGecko from '/react-country-gecko.png';
import { nanoid } from 'nanoid';

function Portfolio() {
  const projects = [
    {
      name: 'sample project',
      image: projectCard,
      description: 'something about project',
    },
    {
      name: 'sample project',
      image: music610,
      description: 'This is the official website of 610Music. A record label based in California. This website uses the Spotify API, and users can stream songs of Artists on the 610Music label. It was built with Gatsby.JS',
    },
    {
      name: 'sample project',
      image: joyfulLearning,
      description: "This is a website for kids' schools. It has different pages for various sections and a responsive layout.",
    },
    {
      name: 'sample project',
      image: vanlife,
      description: "This is a rental site for renting out decked camper vans. It was built using react-router 6 and Firebase.",
    },
    {
      name: 'sample project',
      image: muviWeb,
      description: 'This project is a web app about Movies; we fetched all data from TMBD API; users can like movies, search for films, and leave a comment. All data are recorded in the involvement API and displayed in real time.',
    },
    {
      name: 'sample project',
      image: countryGecko,
      description:"This mobile web app uses live data from the rest countries' APIs and populates the homepage with a list of countries, their names, flag, population and capital city. It has a search feature where users can search for any country from the API and then get more details of the country on a new route when selected.",
    },
  ];

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
        <div className="w-full h-full flex items-center p-4 justify-center text-center bg-light-yellow opacity-0 hover:opacity-90 transition-all duration-500 delay-700 rounded-2xl">
          <small>{project.description}</small>
        </div>
      </div>
    );
  });

  return (
    <section className="grid md:grid-cols-2 gap-10 p-5 mb-10 items-center justify-center cursor-fancy  before:absolute before:h-2/5 before:w-1/3 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/5 after:w-2/5 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10">
      {projectsElement}
    </section>
  );
}

export default Portfolio;
