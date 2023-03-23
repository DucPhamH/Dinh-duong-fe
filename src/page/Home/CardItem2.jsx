import { Link } from 'react-router-dom'
import fruit from '../../asset/img/fruit.jpg'

export default function CardItem2() {
  return (
    <div className='group my-10 flex w-full h-[36rem] hover:border hover:border-red-600 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
      <Link className='relative mx-3 mt-3 flex h-[60%] overflow-hidden rounded-xl'>
        <img className='absolute top-0 right-0 h-full w-full object-cover' src={fruit} alt='fruit' />
      </Link>
      <div className='mt-4 px-5 py-5'>
        <Link href='#'>
          <h1 className='text-3xl tracking-tight text-slate-900'>Cà chua</h1>
        </Link>
        <div className='mt-3 mb-10 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-slate-900'>$449</span>
            <span className='text-sm italic text-slate-900 line-through'>$699</span>
          </p>
        </div>
        <Link
          href='#'
          className='flex uppercase items-center justify-center transition-all ease-in duration-400 hover:scale-105 rounded-md bg-orange-700 px-5 py-2.5 text-center text-xl font-medium text-white hover:bg-orange-600'
        >
          Buy now
        </Link>
      </div>
    </div>
  )
}
