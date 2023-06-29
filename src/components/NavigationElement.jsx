import { Navbar, DarkThemeToggle } from 'flowbite-react';

function NavigationElement() {
  return (
    <>
      <Navbar  className="sticky p-4 top-0 z-10 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-b-gray-200">
        <Navbar.Brand className="font-medium tracking-wider text-lg" href="/">Quami Killy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="md:flex gap-4 items-center ">
            <DarkThemeToggle />
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Projects</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationElement;
