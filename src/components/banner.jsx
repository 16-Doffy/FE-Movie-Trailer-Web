//rafce
import iconrating from "../assets/iconrating.png";
import iconratingHafl from "../assets/iconratingHafl.png";
import wakiki2 from "../assets/wakiki.jpg";
import playws from "../assets/iconplay.jpg";

const Banner = () => {
  return (
    <div className="w-[100%] h-[990px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"/>
      <div className="w-full h-full flex items-center justify-center space-x-32 p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-blue-600 to-purple text-md py-3 px-3">TV SHOW</p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl">WAKIKI Guest House</h2>
            <div className="flex items-center space-x-3">
              <img src={iconrating} alt="rating" className="w-10 h-10"/>
              <img src={iconrating} alt="rating" className="w-10 h-10"/>
              <img src={iconrating} alt="rating" className="w-10 h-10"/>
              <img src={iconrating} alt="rating" className="w-10 h-10"/>
              <img src={iconratingHafl} alt="rating" className="w-10 h-10"/>
            </div>
            <p className="text-white">
              Chào mừng đến với Waikiki 2 là bộ phim truyền hình Hàn Quốc năm 2019 với sự tham gia của Lee Yi-kyung, Kim Seon-ho, Shin Hyun-soo, Moon Ga-young, Ahn So-hee và Kim Ye-won. Đây là phần tiếp theo của loạt phim năm 2018 Chào mừng đến với Waikiki.
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-blue-950 font-bold text-sm">Watch Films</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[500px] relative group cursor-pointer">
          <img src={wakiki2} alt="temp" className="w-full h-full object-cover" />
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <img src={playws} alt="play" className="w-16 h-16 relative z-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;