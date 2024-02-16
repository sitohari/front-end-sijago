function NavbarComponent() {
  return (
    <nav className="navbar max-w-6xl bg-white mx-auto py-10">
      <div className="grid grid-cols-3">
        <img src="./images/main-logo.svg" alt="" />
        <div className="basic-link flex flex-row items-center justify-center">
          <ul className="flex flex-row text-center gap-5 flex-wrap ">
              <li className="text-dark font-normal text-base hover:text-orange hover:font-bold transition-all duration-100 cursor-pointer">Home</li>
              <li className="text-dark font-normal text-base hover:text-orange hover:font-bold transition-all duration-100 cursor-pointer">Kelas</li>
              <li className="text-dark font-normal text-base hover:text-orange hover:font-bold transition-all duration-100 cursor-pointer">About</li>
          </ul>
        </div>
        <div className="flex flex-row gap-x-2 justify-end items-center">
          <button className="border-2 border-gray hover:bg-secondary py-3 px-4 text-dark rounded-full">Sign Up</button>
          <button className="border-2 border-main hover:bg-main py-3 px-4 text-dark hover:text-white rounded-full">Sign In</button>
        </div>
      </div>
    </nav>
   
  )
}

export default NavbarComponent