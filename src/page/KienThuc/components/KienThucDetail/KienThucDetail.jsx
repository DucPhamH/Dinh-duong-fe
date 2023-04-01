import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsDetail } from '../../../../apis/products.api'
import DOMPurify from 'dompurify'
import useQueryParams from '../../../../hooks/useQueryParam'
import CardItem3 from '../../../../components/CardItem3/CardItem3'

export default function KienThucDetail() {
  const { id } = useParams()
  console.log(id)
  const { data: productsDetail } = useQuery({
    queryKey: ['products', id],
    queryFn: () => {
      return getProductsDetail(id)
    }
  })
  const product = productsDetail?.data

  const queryParams = useQueryParams()

  const { data: productsData } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return getProducts(queryParams)
    }
  })
  const products = productsData?.data
  console.log(product)
  return (
    <div>
      <div className='text-black flex justify-center'>
        {product && (
          <>
            <div className='w-[90%] lg:w-[60%]  mt-14 '>
              <h1 className='text-5xl flex py-5 font-semibold text-red-800'>{product.title}</h1>
              <div className='italic mx-10 flex justify-between text-gray-500 font-medium'>
                <div>Ngày tạo: 01/04/2023</div>
                <span className='pl-3 text-orange-600'>Người viết: Pham Duc</span>
              </div>
              <div className='w-full h-[2px] bg-red-500 my-8'></div>
              <div className='italic text-gray-600'>{product.content}</div>
              <div className='flex justify-center py-10  w-full overflow-hidden bg-cover'>
                <img className='lg:w-[80%] lg:h-[34rem] rounded-md' src={product.image} alt='' />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description)
                }}
              />
            </div>
          </>
        )}
      </div>
      <div className='w-full h-[1px] bg-red-200 my-8'></div>
      <div className='grid grid-cols-1 lg:grid-cols-6 mx-5 lg:mx-20 gap-5'>
        <div className='col-span-3'>
          <div className=' mx-24 pt-10 pb-5 text-4xl font-extrabold text-orange-700 '>Bài viết khác</div>
          {products &&
            products.slice(0, 3).map((product) => (
              <div key={product.id}>
                <CardItem3 product={product} pathName={`/kien-thuc/${product.id}`} />
              </div>
            ))}
        </div>
        <div className='col-span-3'>
          <div className=' pt-12 pb-5 flex justify-between items-center mb-6'>
            <div className='text-4xl font-extrabold text-orange-700 '>Bình luận (1)</div>
          </div>
          <form className='mb-6'>
            <textarea
              id='comment'
              rows={6}
              className=' w-full text-3xl text-black border bg-[#fffdf1]  p-4 rounded-lg  border-red-500  '
              placeholder='Write a comment...'
              required
              defaultValue={''}
            />
            <button
              type='submit'
              className='inline-flex mt-5 hover:bg-orange-500 items-center py-4 px-4 text-2xl font-medium text-center text-white bg-orange-600 rounded-lg '
            >
              Post comment
            </button>
          </form>
          <article className='p-6 mb-6 text-base bg-white rounded-lg border border-red-300'>
            <footer className='flex justify-between items-center mb-4'>
              <div className='flex items-center'>
                <p className='inline-flex items-center mr-3 text-3xl text-gray-900'>
                  <img
                    className='mr-2 w-12 h-12 rounded-full'
                    src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                    alt='Michael Gough'
                  />
                  Phạm Đức
                </p>
              </div>
              <button
                id='dropdownComment1Button'
                data-dropdown-toggle='dropdownComment1'
                className='inline-flex items-center p-2 text-3xl font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100'
                type='button'
              >
                <svg
                  className='w-10 h-10'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                </svg>
              </button>
            </footer>
            <p className='text-gray-600 text-3xl'>Bài viết hay!!</p>
          </article>
        </div>
      </div>
    </div>
  )
}
