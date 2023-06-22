import { useState } from "react";
import useDarkSide from "../hooks/useDarkSide"
import { DarkModeSwitch } from "react-toggle-dark-mode";
function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);
  
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }
  return (
    <div>
      <DarkModeSwitch 
        checked={darkSide}
        size={56}
        onChange={toggleDarkMode}
      />
    </div>
  )
}

export default Switcher
