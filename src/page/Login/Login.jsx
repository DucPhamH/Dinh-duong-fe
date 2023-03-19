import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <form className='sm:w-2/3 w-full px-4 lg:px-5 lg:py-20 rounded-lg mx-auto lg:bg-white'>
      <h1 className='my-6 pb-20'>
        <div className='w-auto h-7 sm:h-8 inline-flex text-6xl lg:text-red-700 font-bold'>Login</div>
      </h1>
      <div className='pb-3'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className='block w-full p-4  text-black text-2xl border border-gray-300 rounded-lg '
        />
        <div className='mt-1 flex min-h-[1.25rem] text-lg text-red-600'></div>
      </div>
      <div className='pb-3'>
        <input
          className='block w-full p-4 text-black text-2xl border border-gray-300 rounded-sm'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          autoComplete='on'
        />
        <div className='mt-1 flex min-h-[1.25rem] text-lg text-red-600'></div>
      </div>
      <div className='text-right text-gray-500 mt-5 hover:underline hover:text-gray-100'>
        <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
        <Link className='ml-1 text-red-400' to='/register'>
          Đăng ký
        </Link>
      </div>
      <div className='px-4 pb-2 pt-4'>
        <button className='uppercase block w-full p-5 mt-6 text-2xl rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none'>
          sign in
        </button>
      </div>
    </form>
  )
}
