export const CardKelasComponent = () => {
  return(
    <div className="course-mini flex flex-col bg-white shadow rounded-t-lg max-w-80 mb-60 ">
    <div className="course-images max-w-80 cursor-pointer">
      <a href="#course-detail">
        <img src="./images/example-card.png" alt="" />
      </a>
    </div>
    <div className="course-detail mb-2 cursor-pointer">
        <a href="#course-detail">
            <h3 className="px-4 pt-4 font-semibold text-lg leading-normal">PHP Dasar lorem lorem Lorem, ipsum.</h3>
        </a>
        <span className="flex mt-2 px-4 gap-1 text-orange font-normal">Rp 0</span>
    </div>
    <div className="course-footer px-4 flex flex-row gap-2 cursor-grab pb-2">
        <img src="./images/lavel-pemula.svg" alt="" />
        <span className="icon"> Pemula</span>
    </div>
  </div>
  )
}
