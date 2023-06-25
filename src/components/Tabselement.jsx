import { NavLink } from "react-router-dom"

function TabsElement() {
  return (
    <div className="bg-white dark:bg-bkg-trans flex  rounded-lg mt-5 p-3 w-4/5 lg:w-1/3">
      <NavLink to="portfolio" className="w-1/2 text-center rounded-md bg-white p-2">Portfolio</NavLink>
      <NavLink to="skills" className="w-1/2 text-center p-2">Skills</NavLink>
    </div>
  )
}

export default TabsElement
