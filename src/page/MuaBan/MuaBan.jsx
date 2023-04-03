import { useQuery } from '@tanstack/react-query'
import { getFruit } from '../../apis/products.api'
import shop from '../../asset/img/shop.png'
import CardItem2 from '../../components/CardItem2/CardItem2'
import Pagination from '../../components/Pagination'
import useQueryParams from '../../hooks/useQueryParam'
import LinkBox from '../../components/LinkBox'
function Muaban() {
  const queryParams = useQueryParams()

  const queryConfig = {
    _page: queryParams._page || '1',
    _limit: queryParams._limit || '6'
  }
  const { data: fruitData } = useQuery({
    queryKey: ['fruit', queryConfig],
    queryFn: () => {
      return getFruit(queryConfig)
    },
    keepPreviousData: true
  })
  const fruit = fruitData?.data
  console.log(fruit)
  return (
    <div className='w-full pb-40'>
      <div className='grid grid-cols-1 md:grid-cols-3 py-10 px-32 gap-10 bg-red-800 '>
        <div className='col-span-1  flex justify-center items-center text-4xl text-white uppercase font-semibold'>
          <img src={shop} alt='shop' className='h-24 pr-5' />
          <div>Cửa Hàng</div>
        </div>

        <div className='w-full flex justify-center items-center'>
          <select className='bg-orange-100 border border-gray-300 text-red-800 text-2xl h-16 rounded-full w-[50%] p-3 '>
            <option defaultValue>Chọn theo giá</option>
            <option value='US'>Theo giá tăng dần</option>
            <option value='CA'>Theo giá giảm dần</option>
          </select>
        </div>

        <form className=' flex justify-center items-center col-span-1'>
          <div className='relative w-4/5 '>
            <div className='absolute inset-y-0  cursor-pointer left-0 flex items-center pl-3 pointer-events-none'>
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
              placeholder='Hãy tìm kiếm gì đó...'
              required
            />
          </div>
        </form>
      </div>
      <div className='grid mx-5 md:mx-32 mt-10 grid-cols-1 lg:grid-cols-4 gap-5'>
        <div className=' col-span-1 ml-10 lg:ml-0 '>
          <LinkBox />
        </div>
        <div className='col-span-3'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {fruit &&
              fruit.map((fruit) => (
                <div className='col-span-1 mx-3' key={fruit.id}>
                  <CardItem2 fruit={fruit} />
                </div>
              ))}
          </div>
          <div className='pt-10'>
            <Pagination queryConfig={queryConfig} pageSize={2} url='/mua-ban' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Muaban
