import Banner from '../../components/Banner'
import CardItem2 from '../../components/CardItem2/CardItem2'
import { Link } from 'react-router-dom'
import CardItem3 from '../../components/CardItem3/CardItem3'
import Contact from './Components/Contact'
import SliderCard from './Components/SliderCard'
import CardItem4 from '../../components/CardItem4'
import { useQuery } from '@tanstack/react-query'
import { getFruit, getProducts } from '../../apis/products.api'
import useQueryParams from '../../hooks/useQueryParam'

function Home() {
  const queryParams = useQueryParams()
  const { data: productsData } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return getProducts(queryParams)
    }
  })
  const products = productsData?.data

  const { data: fruitData } = useQuery({
    queryKey: ['fruit', queryParams],
    queryFn: () => {
      return getFruit(queryParams)
    }
  })
  const fruit = fruitData?.data
  console.log(fruit)
  return (
    <div>
      <Banner />
      <div className='w-full px-24 md:px-28 lg:px-32 pt-28'>
        <div className='flex justify-center items-center w-full'>
          <div className='w-64 h-1  bg-gray-400'></div>
          <div className='text-gray-600  text-xl font-bold md:text-5xl flex justify-center mx-10 pb-16'>
            Thực đơn hàng ngày
          </div>
          <div className='w-64 h-1 bg-gray-400'></div>
        </div>

        <SliderCard />
      </div>
      <div className='w-full pt-20'>
        <div className='w-full pl-24 pr-24 pt-28'>
          <div className='flex justify-center items-center w-full'>
            <div className='w-64 h-1 bg-gray-400'></div>
            <div className='text-gray-600 text-xl font-bold md:text-5xl flex justify-center mx-10 pb-16'>
              Kiến thức dinh dưỡng
            </div>
            <div className='w-64 h-1 bg-gray-400'></div>
          </div>
        </div>
        <CardItem4 />
      </div>
      <div className='w-full pt-20'>
        <div className='w-full pl-24 pr-24 pt-28'>
          <div className='flex justify-center items-center w-full'>
            <div className='w-64 h-1 bg-gray-400'></div>
            <div className='text-gray-600 text-xl font-bold md:text-5xl flex justify-center mx-10 pb-16'>Mua bán</div>
            <div className='w-64 h-1 bg-gray-400'></div>
          </div>
        </div>

        <div className=' bg-[#fffdf1] py-5 px-36 gap-2 grid  grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10'>
          {fruit &&
            fruit.slice(0, 4).map((fruit) => (
              <div key={fruit.id}>
                <CardItem2 fruit={fruit} />
              </div>
            ))}
        </div>
        <div className='w-full pt-10 h-auto flex justify-center items-center bg-[#fffdf1]'>
          <Link
            to='/mua-ban'
            className='py-4 px-8 mr-2 mb-2 text-2xl font-medium transition-all ease-in duration-400 hover:scale-105 text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-orange-400'
          >
            Xem thêm
          </Link>
        </div>
      </div>

      <div className='w-full pt-20'>
        <div className='w-full pl-24 pr-24 pt-28'>
          <div className='flex justify-center items-center w-full'>
            <div className='w-64 h-1 bg-gray-400'></div>
            <div className='text-gray-600 text-xl font-bold md:text-5xl flex justify-center mx-10 pb-16'>
              Góc chia sẻ
            </div>
            <div className='w-64 h-1 bg-gray-400'></div>
          </div>
        </div>

        <div className=' mx-3 lg:mx-32 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 '>
          <div className='col-span-3'>
            {products &&
              products.slice(0, 4).map((product) => (
                <div key={product.id}>
                  <CardItem3 product={product} />
                </div>
              ))}
          </div>

          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
