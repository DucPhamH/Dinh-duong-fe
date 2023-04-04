import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import LinkBox from '../../components/LinkBox'
import Pagination from '../../components/Pagination'
import useQueryParams from '../../hooks/useQueryParam'
import { useQuery } from '@tanstack/react-query'
import { getFoods } from '../../apis/products.api'
import CardItem from '../../components/CardItem/CardItem'

function MonAn() {
  const queryParams = useQueryParams()

  const queryConfig = {
    _page: queryParams._page || '1',
    _limit: queryParams._limit || '6'
  }
  const { data: foodsData } = useQuery({
    queryKey: ['foods', queryConfig],
    queryFn: () => {
      return getFoods(queryConfig)
    }
  })
  const foods = foodsData?.data
  return (
    <div className='pb-40'>
      <div className=' w-full flex justify-center items-center pt-5 pb-10 bg-red-800'>
        <form className=' w-3/5 flex justify-center ' noValidate>
          <div className='relative w-4/5 '>
            <div className='p-3 px-8 justify-center flex md:justify-between'>
              <span className='font-bold md:block hidden italic text-orange-100'>Tìm kiếm các món ăn ngon,...</span>
              <div className='flex justify-center'>
                <button className='bg-orange-100 mx-1 h-10 w-10 flex justify-center items-center rounded-full'>
                  <FaFacebookF className='text-red-700' />
                </button>
                <button className='bg-orange-100 mx-1 h-10 w-10 flex justify-center items-center rounded-full'>
                  <BsYoutube className='text-red-700' />
                </button>
              </div>
            </div>

            <div className='absolute top-[60%]  cursor-pointer left-0 flex items-center pl-3 '>
              <button type='submit'>
                <svg
                  aria-hidden='true'
                  className='w-10 h-10 cursor-pointer hover:text-red-600 text-red-800'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
            <input
              type='search'
              id='search'
              className='block w-full placeholder-red-800 p-4 pl-16 text-2xl text-gray-900 border border-gray-300 rounded-full bg-orange-100'
              placeholder='Nhập tại đây...'
              required
            />
          </div>
        </form>
      </div>
      <div className='grid mx-5 md:mx-32 mt-10 grid-cols-1 lg:grid-cols-4 gap-12'>
        <div className=' col-span-1 ml-12 lg:ml-0'>
          <LinkBox />
        </div>
        <div className='col-span-3'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {foods &&
              foods.map((food) => (
                <div key={food.id}>
                  <CardItem food={food} />
                </div>
              ))}
          </div>
          <div className='pt-10'>
            <Pagination queryConfig={queryConfig} pageSize={2} url='/mon-an' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonAn
