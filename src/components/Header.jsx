import profile from '../../public/profile.png'

function Header() {
  return (
    <div className="flex mt-20 items-center gap-10">
      <div className=" w-40 h-40 flex items-center rounded-full bg-white  border-dark-yellow  border-4">
        <img src={profile} alt="Quami" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=' font-bold text-3xl tracking-wide'>Quami Killy</h1>
        <p className=' text-gray-400 tracking-tight'>Software Engineer</p>
      <span className='text-2xl flex  gap-3'>
          <i className="bi bi-github" />
          <i className="bi bi-twitter" />
          <i className="bi bi-instagram" />
          <i className="bi bi-linkedin" />
      </span>
      </div>
    </div>
  )
}

export default Header
