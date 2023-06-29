import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import {Flowbite} from 'flowbite-react';
import NavigationElement from './NavigationElement';
import Header from './Header';
import FooterElement from './FooterElement';
import Stats from './Stats';
import TabsElement from './Tabselement';
import { Outlet } from 'react-router-dom';

function Layout() {
  const containerRef = useRef(null)

  return (
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
    }}
  watch={[]}
  containerRef={containerRef}
>
      <Flowbite>
          <NavigationElement />
          <main data-scroll-container ref={containerRef} className="flex items-center  flex-col gap-4">
       <section data-scroll-section>
              <Header />
              <Stats />
       </section>
         <section data-scroll-section className="min-h-screen mt-4 flex flex-col w-full items-center" >
              <TabsElement />
              <Outlet />
         </section>
          </main>
          <FooterElement />
      </Flowbite>
</LocomotiveScrollProvider>
  )
}

export default Layout
