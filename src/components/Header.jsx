import profile from '../../public/profile.png'
import {BsGithub, BsTwitter, BsLinkedin} from 'react-icons/bs' 
function Header() {
  return (
    <div className="flex items-center gap-10">
      <div className=" w-40 h-40 flex items-center rounded-full bg-white  border-dark-yellow  border-4">
        <img src={profile} alt="Quami" />
      </div>
      <div className="flex flex-col">
        <h1 className=' font-bold text-3xl tracking-wider'>Quami Killy</h1>
        <p className=' text-gray-400 tracking-tight'>Software Engineer</p>
          <BsGithub />
          <BsTwitter />
          <BsLinkedin />
      </div>
    </div>
  )
}

export default Header
