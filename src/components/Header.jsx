import profile from '../../public/profile.png'
function Header() {
  return (
    <div className="flex items-center">
      <div className=" w-40 h-40 flex items-center rounded-full bg-white  border-dark-yellow  border-4">
        <img src={profile} alt="Quami" />
      </div>
    </div>
  )
}

export default Header
