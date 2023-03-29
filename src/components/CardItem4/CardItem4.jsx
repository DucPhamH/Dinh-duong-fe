export default function CardItem4() {
  return (
    <div className='z-1 relative items-center justify-center w-full h-[50rem] overflow-hidden'>
      <div className='inset-0 bg-back_ground h-screen bg-cover bg-center'></div>
      <div className='absolute inset-0 z-1 flex items-center justify-center h-screen w-full bg-yellow-900 bg-opacity-75'></div>
      <div className='absolute inset-0  z-2  flex flex-col items-center justify-center'>
        <div className='shadow-2xl bg-back_ground rounded-lg w-4/5 h-96 bg-cover bg-center'>
          <div className='grid grid-cols-12 gap-1'>
            <div className='relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 2xl:col-span-7'>
              <div className='border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0'>
                <p className='italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold '>
                  The Mysteries Of The Forest
                </p>
              </div>
              <div className='absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5'></div>
            </div>
            <div className='col-span-12 pt-24 sm:col-span-12 md:col-span-5 md:pt-0 lg:col-span-5 xxl:col-span-5'>
              <div className='relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg'>
                <div className='p-8'>
                  <p className='text-white text-base md:text-lg lg:text-2xl mb-4'>
                    Forests are truly amazing places. Combining impressive biodiversity with natural beauty, the woods
                    of the world can be both captivating and perplexing. A hike through a forest can be a relaxing way
                    to pass an afternoon or, sometimes, a glimpse into the unknown.
                  </p>
                  <div className='bottom-0 absolute p-2 right-0'>
                    <button className='border-2 hover:shadow-xl shadow-lg transition-all ease-in duration-400 hover:scale-105 border-white px-4 py-3 text-xl font-medium text-center text-white rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none'>
                      <span>LEARN MORE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
