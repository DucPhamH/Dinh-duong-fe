import { Header } from '../Header'

function Mainlayout({ children }) {
  return (
    <div className='min-h-screen '>
      <div className='top-0 z-100 fixed w-full bg-white h-32'>
        <Header />
      </div>

      <div className=' mt-32 h-[2000px] text-white'>{children}</div>
    </div>
  )
}

export default Mainlayout
