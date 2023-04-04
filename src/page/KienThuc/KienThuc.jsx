import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../apis/products.api'
import CardItem3 from '../../components/CardItem3/CardItem3'
import Pagination from '../../components/Pagination'
import useQueryParams from '../../hooks/useQueryParam'
import LinkBox from '../../components/LinkBox'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

function KienThuc() {
  const queryParams = useQueryParams()
  console.log(queryParams)
  const queryConfig = {
    _page: queryParams._page || '1',
    _limit: queryParams._limit || '4'
  }

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return getProducts(queryConfig)
    },
    keepPreviousData: true
  })
  const products = productsData?.data
  console.log(productsData)
  console.log(queryParams)
  return (
    <>
      <div className=' w-full flex justify-center items-center pt-5 pb-10 bg-red-800 '>
        <form className=' w-3/5 flex justify-center' noValidate>
          <div className='relative w-4/5 '>
            <div className='p-3 px-8 justify-center flex md:justify-between'>
              <span className='font-bold md:block hidden italic text-orange-100'>
                Tìm kiếm kiến thức dinh dưỡng,...
              </span>
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
      <div className='pt-10 mx-5 lg:mx-40 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 pb-40 '>
        <div className='col-span-3 mx-5 md:mx-0 '>
          <div className='text-red-700 font-semibold text-5xl '>Kiến thức dinh dưỡng</div>
          <div className='w-full h-[2px] bg-red-200 my-8'></div>
          <div className=' text-gray-800 text-3xl italic '>
            Chất dinh dưỡng có vai trò vô cùng quan trọng đối với sức khoẻ và sự phát triển của cơ thể. <br /> <br />
            Chế độ ăn đầy đủ dinh dưỡng là bữa ăn có đủ các thành phần dinh dưỡng cả về số lượng và chất lượng. Cùng tìm
            hiểu dinh dưỡng là gì và những lợi ích mà dinh dưỡng mang đến cho sức khỏe của bạn và gia đình bạn nhé!
          </div>
          <div className='mt-10 text-gray-800 font-semibold text-4xl '>Tại sao cần kiến thức dinh dưỡng ?</div>
          <ul className=' text-red-800 text-3xl my-10 '>
            <li className='mb-4'>
              ✔ Hiểu biết về dinh dưỡng giúp bạn tạo lập một chế độ ăn uống đầy đủ để có sức khỏe tốt
            </li>
            <li className='mb-4'>✔ Phòng ngừa các bệnh liên quan tới dinh dưỡng</li>
            <li className='mb-4'>✔ Khôi phục sức khỏe sau thời kì bệnh tật</li>
          </ul>
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <CardItem3
                  product={product}
                  pathName={`${product.id}`}
                  className='flex cursor-pointer flex-col justify-center mt-5'
                />
              </div>
            ))}
          <Pagination queryConfig={queryConfig} pageSize={2} url='/kien-thuc' />
        </div>
        <div className='col-span-2 mx-5 md:mx-0'>
          <div className='mt-10 '>
            <iframe
              className=' w-full rounded-xl border-4 border-red-600 h-[30rem]'
              src='https://www.youtube.com/embed/MHBOOP_eKZE'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className=' mt-12 '>
            <LinkBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default KienThuc
