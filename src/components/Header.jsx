import profile from '../../public/profile.png'
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Header() {
  return (
    <div className="flex mt-20 items-center gap-10">
      <div className="w-40 h-40 flex items-center rounded-full bg-white  border-dark-yellow  border-4">
        <img src={profile} alt="Quami" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className='font-bold text-3xl tracking-wide'>Kingsley Okine</h1>
        <p className='text-gray-400 tracking-tight'>Software Engineer</p>
      <span className='text-2xl flex gap-3'>
          <a href="https://www.linkedin.com/in/kingsley-okine/"><BsLinkedin/></a>
          <a href="https://www.instagram.com/quami_killy/"><BsInstagram/></a>
          <a href="https://twitter.com/Quami_Killy"><BsTwitter /></a>
          <a href="https://github.com/killy10o10"><BsGithub/></a>
      </span>
      </div>
    </div>
  )
}

export default Header
