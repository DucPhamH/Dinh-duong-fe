import { useState } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
function ShoppingCart() {
  const [open, setOpen] = useState(false)
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <div className=' flex justify-center items-center cursor-pointer pr-6 '>
      <div className='relative' onMouseEnter={showPopover} onMouseLeave={hidePopover}>
        <div className='t-0 absolute left-6 bottom-6'>
          <p className='flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>3</p>
        </div>
        <div className='h-10 w-10 font-thin hover:text-yellow-500'>
          <TiShoppingCart className='h-10 w-10' />
        </div>
        {open && (
          <div className='absolute right-[-10rem] top-20 fix_hover w-auto md:right-0 border md:top-14 rounded-b border-spacing-1 rounded-lg z-20'>
            <div className='shadow-xl w-[30rem] '>
              <div className='p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100'>
                <div className='p-2 w-20'>
                  <img src='https://dummyimage.com/50x50/bababa/0011ff&text=50x50' alt='img product' />
                </div>
                <div className='flex-auto mb-5 mx-4 text-xl w-32'>
                  <div className='font-bold mt-3'>Product 1</div>
                  <div className='truncate'>Product 1 descriptioncccccccccccccccccccccccccccccc</div>
                </div>
                <div className='flex flex-col w-18 font-medium'>$12.22</div>
              </div>
              <div className='p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100'>
                <div className='p-2 w-20'>
                  <img src='https://dummyimage.com/50x50/bababa/0011ff&text=50x50' alt='img product' />
                </div>
                <div className='flex-auto mb-5 mx-4 text-xl w-32'>
                  <div className='font-bold mt-3'>Product 1</div>
                  <div className='truncate'>Product 1 descriptioncccccccccccccccccccccccccccccc</div>
                </div>
                <div className='flex flex-col w-18 font-medium'>$12.22</div>
              </div>
              <div className='p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100'>
                <div className='p-2 w-20'>
                  <img src='https://dummyimage.com/50x50/bababa/0011ff&text=50x50' alt='img product' />
                </div>
                <div className='flex-auto mb-5 mx-4 text-xl w-32'>
                  <div className='font-bold mt-3'>Product 1</div>
                  <div className='truncate'>Product 1 descriptioncccccccccccccccccccccccccccccc</div>
                </div>
                <div className='flex flex-col w-18 font-medium'>$12.22</div>
              </div>
              <div className='p-4 justify-center rounded-b-lg bg-white flex'>
                <button
                  className='text-xl hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer
                          hover:bg-orange-400 hover:text-teal-100
                          bg-teal-100
                          text-teal-700
                          border duration-200 ease-in-out
                          transition'
                >
                  Đi đến giỏ hàng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart
