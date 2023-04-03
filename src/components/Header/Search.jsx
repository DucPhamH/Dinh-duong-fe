import { FaSearch } from 'react-icons/fa'
function Search({ activeSearch }) {
  return (
    <div>
      {activeSearch && (
        <div
          className='search-form relative flex items-center space-x-4 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-10 xl:px-8
transform duration-500 transition-all'
        >
          <div className='flex bg-gray-200 p-3 w-full space-x-2 rounded-lg items-center'>
            <div>
              <FaSearch className='text-gray-500 font-extrabold mx-1' />
            </div>
            <input
              className='w-full  bg-gray-50 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm sm:text-2xl p-3'
              type='text'
              autoFocus
              placeholder='Search something...'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
