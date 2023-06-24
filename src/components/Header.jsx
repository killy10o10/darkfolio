import profile from '/profile.png'
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Header() {
  return (
    <div className="md:flex grid justify-items-center mt-10 md:mt-20 items-center gap-10">
      <div className="w-40 h-40 flex items-center rounded-full bg-white  border-dark-yellow  border-4">
        <img src={profile} alt="Quami" />
      </div>
      <div className="flex items-center md:items-start flex-col gap-2">
        <h1 className='font-bold text-3xl tracking-wide'>Kingsley Okine</h1>
        <p className='text-gray-500 font-medium tracking-tight'>Software Engineer</p>
        <span className='text-2xl text-gray-500 dark:text-white flex gap-8 md:gap-4'>
            <a href="https://www.linkedin.com/in/kingsley-okine/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://www.instagram.com/quami_killy/" target="_blank" rel="noreferrer"><BsInstagram/></a>
            <a href="https://twitter.com/Quami_Killy" target="_blank" rel="noreferrer"><BsTwitter /></a>
            <a href="https://github.com/killy10o10" target="_blank" rel="noreferrer"><BsGithub/></a>
        </span>
      </div>
    </div>
  )
}

export default Header
