import videoBg from '../../asset/video/lemon.mp4'
import videoBg1 from '../../asset/video/tomato.mp4'
import videoBg2 from '../../asset/video/yard.mp4'

function Home() {
  return (
    <>
      <div className='grid grid-cols-1 relative bg-blue-50'>
        <video className='w-full h-auto lg:h-[46rem] object-cover ' src={videoBg2} autoPlay loop muted></video>
      </div>
      <div className='bg-black top-40 w-20 absolute h-10'></div>
    </>
  )
}

export default Home
