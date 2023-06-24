import {Flowbite } from 'flowbite-react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import FooterElement from './components/FooterElement';

function App() {
  return (
    <Flowbite>
      <Navigation />
      <section className="flex items-center min-h-screen flex-col gap-4 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10">
        <Header />
      </section>
      <FooterElement />
    </Flowbite>
  );
}

export default App;
