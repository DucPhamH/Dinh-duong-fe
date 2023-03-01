import fruit from '../../asset/img/fruit.jpg'
import { Link } from 'react-router-dom'
function CardItem() {
  return (
    <div className='max-w-lg p-2  bg-white  hover:shadow-2xl border-2 transition-all ease-in duration-400 border-yellow-600 shadow-lg  rounded-lg'>
      <Link to='#'>
        <img className='rounded-t-lg' src={fruit} alt='fruit' />
      </Link>
      <div className='p-5'>
        <Link to='#'>
          <h1 className='mb-2 text-3xl font-bold tracking-tight text-gray-900'>Thực đơn gia đình</h1>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <Link
          to='#'
          className='inline-flex items-center px-4 border-2 hover:shadow-xl shadow-lg transition-all ease-in duration-400 hover:scale-105 border-yellow-500 py-3 text-2xl font-medium text-center text-gray-700  rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none'
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default CardItem
