import { Button } from "flowbite-react"
import {HiArrowDownTray} from "react-icons/hi2"
import myResume from "/resume.pdf"
function Stats() {
  return (
    <div className="flex flex-col gap-20 mt-10">
      <div className="grid grid-cols-3 md:gap-20 gap-5 text-center">
        <div>
          <p>2+</p>
          <p>Years of work</p>
          <p>experience</p>
        </div>
        <div>
          <p>50+</p>
          <p>completed</p>
          <p>projects</p>
        </div>
        <div>
          <p>20+</p>
          <p>statisfied</p>
          <p>customers</p>
        </div>
      </div>
      <div className="flex gap-4 self-center">
        <Button className="dark:bg-light-yellow dark:hover:bg-dark-yellow bg-dark-yellow hover:bg-light-yellow text-slate-900 transition"><a href={myResume} download="Kingsley's Resume" target="_blank" rel="noreferrer" className="flex items-center">Download CV <HiArrowDownTray /> </a></Button>
        <Button className="dark:text-gray-300 dark:hover:bg-slate-900 dark:bg-slate-800 bg-white text-slate-900 hover:bg-gray-300  transition"><a href="mailto:killynelly@gmail.com" target="_blank" rel="noreferrer">Contact me</a></Button>
      </div>
    </div>
  )
}

export default Stats
