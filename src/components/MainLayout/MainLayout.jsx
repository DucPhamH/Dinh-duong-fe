import { Header } from '../Header'

function Mainlayout({ children }) {
  return (
    <>
      <div className='top-0 z-10 backdrop-filter shadow-lg bg-white/95 fixed w-full border-b-2 bg-white h-40'>
        <Header />
      </div>

      <div className=' mt-40 z-0 h-auto text-white'>{children}</div>
    </>
  )
}

export default Mainlayout
