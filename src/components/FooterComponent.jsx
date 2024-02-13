
const FooterComponent = () => {
  return (
    <section className="footer w-full bg-dark">
    <div className="grid grid-cols-3 max-w-6xl mx-auto py-10">
        <div className="comapny flex flex-col gap-y-4">
            <img src="./images/main-logo.svg"  alt="logo" className="max-w-20" />
            <p className="text-base text-white font-normal">Jakarta, Indonesia</p>
        </div>
        <div className="menu-list flex flex-row justify-center">
            <ul className="flex flex-row text-center gap-5 flex-wrap ">
                <li className="text-white font-normal text-base hover:text-main hover:font-bold transition-all duration-100 cursor-pointer">Home</li>
                <li className="text-white font-normal text-base hover:text-main hover:font-bold transition-all duration-100 cursor-pointer">Kelas</li>
                <li className="text-white font-normal text-base hover:text-main hover:font-bold transition-all duration-100 cursor-pointer">About</li>
            </ul>
        </div>
        <div className="flex flex-row gap-x-4 justify-end">
           <a href="">
                <img src="./images/btn-icon-sms.svg" alt="" />
           </a>
           <a href="">
                <img src="./images/btn-icon-global.svg" alt="" />
           </a>
           <a href="">
                <img src="./images/btn-icon-call.svg" alt="" />
           </a>
           <a href="">
                <img src="./images/btn-icon-video.svg" alt="" />
           </a>
        </div>
    </div>
    <div className="copyright max-w-full text-center py-10 border-t-0">
    <p className="text base text-gray">All Rights Reserved • Copyright SiJago 2024 in Jakarta</p>
    </div>
   </section>
  )
}

export default FooterComponent