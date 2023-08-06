import { Navbar} from 'flowbite-react';
import useColorMode from "../hooks/useColorMode";
import { BsSunFill } from 'react-icons/bs';
import { HiMoon } from 'react-icons/hi2';

function NavigationElement() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <Navbar  className="sticky p-4 top-0 z-10 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-b-gray-200">
        <Navbar.Brand className="font-bold tracking-tight text-lg" href="/">OK</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="md:flex gap-4 items-center ">
            <button
            className="text-lg"
            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
            >
              {colorMode === "light" ? <HiMoon/> : <BsSunFill />}
            </button>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="/#projects">Projects</Navbar.Link>
            <Navbar.Link href="mailto:killynelly@gmail.com" target="_blank" rel="noreferrer">Contact</Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationElement;
