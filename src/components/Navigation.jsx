import { Navbar, DarkThemeToggle } from 'flowbite-react';

function Navigation() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/">Quami Killy</Navbar.Brand>
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

export default Navigation;
