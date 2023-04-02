import { Link } from 'react-router-dom'
function CardItem({ food }) {
  return (
    <div className='max-w-lg p-2 m-2 lg:m-0 bg-white overflow-hidden  hover:shadow-2xl border-2 transition-all ease-in duration-400 hover:border-red-600 shadow-lg  rounded-lg'>
      <div className=''>
        <img className='rounded-t-lg h-[20rem] w-full object-cover ' src={food.image} alt='food' />
      </div>
      <div className='p-5'>
        <Link to='#'>
          <h1 className='mb-2 h-[4.5rem] text-3xl font-bold tracking-tight line-clamp-2 text-gray-900'>{food.title}</h1>
        </Link>
        <p className='mb-3 font-normal h-[7.5rem] text-gray-700 line-clamp-3 dark:text-gray-400'>{food.description}</p>
        <Link
          to='#'
          className='inline-flex items-center px-4 border-2 hover:shadow-xl shadow-lg transition-all ease-in duration-400 hover:scale-105 border-yellow-500 py-3 text-2xl font-medium text-center text-gray-700  rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none'
        >
          Đọc tiếp
        </Link>
      </div>
    </div>
  )
}

export default CardItem
