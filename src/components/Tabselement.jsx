import { NavLink } from "react-router-dom"

function TabsElement() {
  const activeStyle = {
    background: '#d7d7d7'
  }
  return (
    <div className="bg-white dark:bg-bkg-trans flex  rounded-2xl mt-5 p-3 w-4/5 lg:w-1/3 transition-all">
      <NavLink style={({isActive}) => (isActive ?  activeStyle : null)} to="portfolio" className="w-1/2 text-center rounded-md transition-all p-2">Portfolio</NavLink>
      <NavLink style={({isActive}) => (isActive ?  activeStyle : null)} to="skills" className="w-1/2 text-center rounded-md transition-all p-2">Skills</NavLink>
    </div>
  )
}

export default TabsElement
