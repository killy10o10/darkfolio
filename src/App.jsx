import { Button, DarkThemeToggle, Flowbite } from 'flowbite-react';
import Switcher from './components/Switcher';

function App() {
  return (
    <Flowbite>
      <section className="flex flex-col items-center">
        <h1 className="text-3xl text-center font-bold text-slate-900 dark:text-white mt-5">Hello world!</h1>
        <Button className="my-4">Dark Mode</Button>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> ...</svg>
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 font-medium tracking-tight ">Writes Upside-Down</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
        <DarkThemeToggle />
        <Switcher />
      </section>
    </Flowbite>
  );
}

export default App;
