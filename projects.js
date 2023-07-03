import projectCard from '/projectCard.svg';
import music610 from '/610music.png';
import joyfulLearning from '/joyful-learning.png';
import vanlife from '/vanlife.png';
import muviWeb from '/muvi-webapp.png';
import countryGecko from '/react-country-gecko.png';

export const projects = [
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