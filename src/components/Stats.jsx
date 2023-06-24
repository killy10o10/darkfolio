import { Button } from "flowbite-react"
import {HiArrowDownTray} from "react-icons/hi2"
function Stats() {
  return (
    <div className="flex flex-col gap-20 mt-10">
      <div className="grid grid-cols-3 gap-20 text-center">
        <div>
          <p>3</p>
          <p>Years of work</p>
          <p>experience</p>
        </div>
        <div>
          <p>50+ </p>
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
        <Button className="bg-light-yellow hover:bg-dark-yellow text-slate-900">Download CV <HiArrowDownTray /> </Button>
        <Button className="text-gray-300 hover:bg-slate-900 bg-slate-800">Contact me</Button>
      </div>
    </div>
  )
}

export default Stats
