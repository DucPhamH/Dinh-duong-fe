import videoBg from '../../asset/video/lemon.mp4'
import videoBg1 from '../../asset/video/tomato.mp4'
import videoBg2 from '../../asset/video/yard.mp4'
const listVideo = [{ video: videoBg }, { video: videoBg1 }, { video: videoBg2 }]
function Banner() {
  return (
    <div className='grid grid-cols-1 bg-blue-50'>
      <div className='relative w-full'>
        <video
          className='w-full lg:h-[52rem]  object-cover '
          src={listVideo[Math.floor(Math.random() * 3)].video}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className='absolute  flex items-end justify-around md:h-[44rem] lg:h-[52rem] w-full'>
        <div className='md:pb-20 pt-60'>
          <button class='bg-transparent transition-all ease-in duration-400 shadow-lg hover:shadow-xl px-8 text-xl md:text-xl hover:scale-105 lg:text-3xl hover:bg-yellow-500 text-white font-medium  md:py-5 py-3  md:px-32  lg:px-44 border border-white hover:border-transparent rounded-full'>
            Thực đơn hàng ngày
          </button>
        </div>
        <div className='md:pb-20 pt-60'>
          <button class='bg-transparent transition-all ease-in duration-400 shadow-lg hover:shadow-xl text-xl md:text-xl hover:scale-105 lg:text-3xl hover:bg-yellow-500 text-white font-medium  md:py-5 py-3 md:px-32 px-8 lg:px-44 border border-white hover:border-transparent rounded-full'>
            Kiến thức dinh dưỡng
          </button>
        </div>
        <div className='md:pb-20 pt-60'>
          <button class='bg-transparent transition-all ease-in duration-400 shadow-lg hover:shadow-xl text-xl md:text-xl hover:scale-105 lg:text-3xl hover:bg-yellow-500 text-white font-medium  md:py-5 py-3 md:px-32 px-8 lg:px-44 border border-white hover:border-transparent rounded-full'>
            Món ăn dinh dưỡng
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
