import videoBg from '../../asset/video/lemon.mp4'
import videoBg1 from '../../asset/video/tomato.mp4'
import videoBg2 from '../../asset/video/yard.mp4'

const listVideo = [{ video: videoBg }, { video: videoBg1 }, { video: videoBg2 }]

function Home() {
  return (
    <>
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
          <div className='pb-20 xs:hidden'>
            <button class='bg-black px-10 text-xl md:text-3xl hover:bg-yellow-500 text-white font-medium  py-5  md:px-32  lg:px-44 border border-white hover:border-transparent rounded-full'>
              Button
            </button>
          </div>
          <div className='pb-20 xs:hidden'>
            <button class='bg-black text-xl md:text-3xl hover:bg-yellow-500 text-white font-medium  py-5 md:px-32 px-10 lg:px-44 border border-white hover:border-transparent rounded-full'>
              Button
            </button>
          </div>
          <div className='pb-20 xs:hidden'>
            <button class='bg-black text-xl md:text-3xl hover:bg-yellow-500 text-white font-medium  py-5 md:px-32 px-10 lg:px-44 border border-white hover:border-transparent rounded-full'>
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
