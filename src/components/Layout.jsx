import { Flowbite } from 'flowbite-react';
import NavigationElement from './NavigationElement';
import Header from './Header';
import FooterElement from './FooterElement';
import Stats from './Stats';
import TabsElement from './Tabselement';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Flowbite>
      <NavigationElement />
      <main className="flex items-center  flex-col gap-4">
        <section>
          <Header />
          <Stats />
        </section>
        <section className="min-h-screen mt-4 flex flex-col w-full items-center">
          <TabsElement />
          <Outlet />
        </section>
      </main>
      <FooterElement />
    </Flowbite>
  );
}

export default Layout;
