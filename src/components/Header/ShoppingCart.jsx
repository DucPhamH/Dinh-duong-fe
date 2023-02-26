import { TiShoppingCart } from 'react-icons/ti'
function ShoppingCart() {
  return (
    <div className=' flex justify-center items-center cursor-pointer pr-6'>
      <div className='relative'>
        <div className='t-0 absolute left-6 bottom-6'>
          <p className='flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>3</p>
        </div>
        <div className='h-10 w-10 font-thin hover:text-yellow-500'>
          <TiShoppingCart className='h-10 w-10' />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
