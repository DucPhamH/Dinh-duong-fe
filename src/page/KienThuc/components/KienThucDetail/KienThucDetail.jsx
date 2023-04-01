import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductsDetail } from '../../../../apis/products.api'
import DOMPurify from 'dompurify'

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
  console.log(product)
  return (
    <div className='text-black'>
      {product && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description)
          }}
        />
      )}
    </div>
  )
}
