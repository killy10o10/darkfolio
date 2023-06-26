import {Flowbite} from 'flowbite-react';
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
        <section className="flex items-center min-h-screen flex-col gap-4">
          <Header />
          <Stats />
          <TabsElement />
          <Outlet />
        </section>
        <FooterElement />
    </Flowbite>
  )
}

export default Layout
