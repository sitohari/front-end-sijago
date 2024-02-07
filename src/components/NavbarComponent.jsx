function NavbarComponent() {
  return (
    <nav>
      <div className="flex flex-row justify-between max-w-6xl mx-auto py-10 ">
        <div className="logo flex items-center">
          <span className="text-xl text-[#29A867] font-bold">Sijago</span>
        </div>
        <div className="nav-links flex items-center">
          <ul className="flex flex-row text-center gap-x-5 ">
            <li className="text-[#0C0D36] font-normal text-base hover:text-[#FF7158] hover:font-bold">Home</li>
            <li className="text-[#0C0D36] font-normal text-base hover:text-[#FF7158] hover:font-bold">Kelas</li>
            <li className="text-[#0C0D36] font-normal text-base hover:text-[#FF7158] hover:font-bold">About</li>
          </ul>
        </div>
        <div className="flex flex-row gap-x-1 items-center">
          <button className="py-3.5 px-4 text-lg font-medium bg-[#f1f4f5] text-[#0C0D36] rounded-full">SignUp</button>
          <button className="py-3.5 px-4 text-lg font-medium bg-[#29A867]  text-[#ffffff] rounded-full">SignIn</button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent