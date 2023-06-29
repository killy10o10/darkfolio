import { NavLink } from "react-router-dom"

function TabsElement() {
  return (
    <div className="bg-white dark:bg-bkg-trans flex rounded-2xl mt-5 p-3 w-4/5 lg:w-1/3 transition-all">
      <NavLink to="." className={({isActive}) => (isActive ? 'w-1/2 text-center rounded-md p-2 bg-bkg-ash200 dark:bg-bkg-dark' : 'w-1/2 text-center p-2')}>Portfolio</NavLink>
      <NavLink to="skills" className={({isActive}) => (isActive ? 'w-1/2 text-center rounded-md p-2 bg-bkg-ash200 dark:bg-bkg-dark' : 'w-1/2 text-center p-2')}>Skills</NavLink>
    </div>
  )
}

export default TabsElement
