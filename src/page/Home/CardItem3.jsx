import fruit from '../../asset/img/fruit2.jpg'
function CardItem3() {
  return (
    <div className='flex flex-col justify-center mx-20 mt-5'>
      <div className='relative w-full hover:border-red-600 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 border border-white bg-white'>
        <div className='w-full md:w-72 bg-white grid place-items-center'>
          <img src={fruit} alt='tailwind logo' className='rounded-xl w-full      bg-cover' />
        </div>
        <div className='w-full bg-white flex flex-col space-y-2 p-10'>
          <h3 className='font-black text-gray-800 md:text-3xl text-xl'>The Majestic and Wonderful Bahamas</h3>
          <p className='md:text-2xl text-gray-500 text-base'>
            The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The
            Bahamas is an unmatched destination
          </p>

          <span className='font-normal text-gray-600 text-base'>By night</span>
        </div>
      </div>
    </div>
  )
}

export default CardItem3
