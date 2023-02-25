import { Header } from '../Header'

function Mainlayout({ children }) {
  return (
    <>
      <div className='top-0 z-10 backdrop-filter bg-white/95 fixed w-full border-b-2 bg-white h-32'>
        <Header />
      </div>

      <div className=' mt-32 z-0 h-[2000px] text-white'>{children}</div>
    </>
  )
}

export default Mainlayout
