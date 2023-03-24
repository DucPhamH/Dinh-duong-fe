export default function Contact() {
  return (
    <div className='mx-20 mt-5 '>
      <div className='border-2 shadow-lg shadow-green-400 border-red-500 rounded-3xl'>
        <form>
          <label className=' flex justify-center my-6 '>
            <span className='text-red-500 uppercase font-extrabold text-4xl mb-5'>Liên hệ tư vấn</span>
          </label>
          <div className='w-full flex pb-5 justify-center'>
            <input
              type='text'
              name='name'
              className=' text-black border bg-[#fffdf1] w-2/3 text-2xl p-4 rounded-lg  border-red-500'
              placeholder='Họ và tên...'
            />
          </div>
          <div className='w-full flex pb-5 justify-center'>
            <input
              type='text'
              name='name'
              className=' text-black border bg-[#fffdf1] w-2/3 text-2xl p-4 rounded-lg  border-red-500'
              placeholder='Số điện thoại...'
            />
          </div>
          <div className='w-full flex pb-10 justify-center'>
            <textarea
              name='message'
              className='text-black border bg-[#fffdf1] w-2/3 text-2xl p-4 rounded-lg  border-red-500'
              rows={5}
              placeholder='Nội dung cần tư vấn...'
              defaultValue={''}
            />
          </div>
          <div className='w-full flex pb-5 justify-center'>
            <button
              type='submit'
              className=' w-2/3 transition-all ease-in duration-400 hover:scale-105 hover:bg-red-500 rounded-full font-medium h-16 bg-orange-400'
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
