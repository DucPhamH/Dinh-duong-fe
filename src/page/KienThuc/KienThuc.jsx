import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../apis/products.api'
import CardItem3 from '../../components/CardItem3/CardItem3'
import Pagination from '../../components/Pagination'
import useQueryParams from '../../hooks/useQueryParam'

function KienThuc() {
  const queryParams = useQueryParams()

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
    <div className='pt-10 lg:mx-40 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 '>
      <div className='col-span-3 mx-5 md:mx-0 '>
        <div className='text-gray-600 font-semibold text-5xl '>Kiến thức dinh dưỡng</div>
        <div className='w-full h-1 bg-gray-400 my-8'></div>
        <div className=' text-gray-800 text-3xl '>
          Chất dinh dưỡng có vai trò vô cùng quan trọng đối với sức khoẻ và sự phát triển của cơ thể. <br /> <br />
          Chế độ ăn đầy đủ dinh dưỡng là bữa ăn có đủ các thành phần dinh dưỡng cả về số lượng và chất lượng. Cùng tìm
          hiểu dinh dưỡng là gì và những lợi ích mà dinh dưỡng mang đến cho sức khỏe của bạn và gia đình bạn nhé!
        </div>
        <div className='mt-10 text-gray-800 font-semibold text-4xl '>Tại sao cần kiến thức dinh dưỡng ?</div>
        <ul className=' text-gray-800 text-3xl my-10 '>
          <li className='mb-4'>
            ✔ Hiểu biết về dinh dưỡng giúp bạn tạo lập một chế độ ăn uống đầy đủ để có sức khỏe tốt
          </li>
          <li className='mb-4'>✔ Phòng ngừa các bệnh liên quan tới dinh dưỡng</li>
          <li className='mb-4'>✔ Khôi phục sức khỏe sau thời kì bệnh tật</li>
        </ul>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <CardItem3 product={product} className='flex flex-col justify-center mt-5' />
            </div>
          ))}
        <Pagination queryConfig={queryConfig} pageSize={3} />
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
          <div className='border-2 w-full shadow-lg shadow-green-400 border-red-500 '>
            <div className='flex justify-center items-center py-5 bg-orange-500 text-white font-semibold uppercase text-3xl '>
              Có thể bạn quan tâm
            </div>
            <div className='w-full h-[1px] bg-gray-400'></div>
            <div className='w-full text-gray-800 line-clamp-1 '>
              <Link to='/' className='line-clamp-1 px-5 py-5 hover:text-orange-600'>
                Ăn nhiều trứng có tốt cho sức khoẻ không ?
              </Link>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <div className='w-full text-gray-800 line-clamp-1 '>
              <Link to='/' className='line-clamp-2 px-5 py-5 hover:text-orange-600'>
                Ăn nhiều trứng có tốt cho sức khoẻ không ?
              </Link>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <div className='w-full text-gray-800 line-clamp-1 '>
              <Link to='/' className='line-clamp-2 px-5 py-5 hover:text-orange-600'>
                Ăn nhiều trứng có tốt cho sức khoẻ không ?
              </Link>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <div className='w-full text-gray-800  line-clamp-1'>
              <Link to='/' className='line-clamp-2 px-5 py-5 hover:text-orange-600'>
                Ăn nhiều trứng có tốt cho sức khoẻ không ?
              </Link>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <div className='w-full text-gray-800 line-clamp-1 '>
              <Link to='/' className='line-clamp-2 px-5 py-5 hover:text-orange-600'>
                Ăn nhiều trứng có tốt cho sức khoẻ không ?
              </Link>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KienThuc
