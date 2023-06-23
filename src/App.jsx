import {Flowbite } from 'flowbite-react';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <Flowbite>
      <Navigation />
      <section className="flex flex-col items-center">
        <Header />
      </section>
    </Flowbite>
  );
}

export default App;
