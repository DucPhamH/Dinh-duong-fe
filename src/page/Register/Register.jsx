import { rules } from '../../ultils/rules'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <form
      className='sm:w-2/3 w-full px-4 lg:px-5 lg:py-20 rounded-lg mx-auto lg:bg-white'
      onSubmit={onSubmit}
      noValidate
    >
      <h1 className='my-6 pb-20'>
        <div className='w-auto h-7 sm:h-8 inline-flex text-6xl lg:text-red-700 font-bold'>Register</div>
      </h1>
      <div className='pb-3 '>
        <input
          type='email'
          id='email'
          placeholder='Email'
          className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg '
          {...register('email', rules.email)}
        />
        <div className='mt-1 flex min-h-[1.25rem] text-lg text-red-600'>{errors.email?.message}</div>
      </div>
      <div className='pb-3'>
        <input
          className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-sm'
          type='password'
          placeholder='Password'
          autoComplete='on'
          {...register('password', rules.password)}
        />
        <div className='mt-1 flex min-h-[1.25rem] text-lg text-red-600'>{errors.password?.message}</div>
      </div>
      <div className='pb-3'>
        <input
          className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-sm'
          type='password'
          placeholder='Confirm Password'
          autoComplete='on'
          {...register('confirm_password', {
            ...rules.confirm_password,
            validate: (value) => value === getValues('password') || 'Nhập không khớp password'
          })}
        />
        <div className='mt-1 flex min-h-[1.25rem] text-lg text-red-600'>{errors.confirm_password?.message}</div>
      </div>
      <div className='text-right text-gray-500 flex  '>
        <span className='text-gray-400'>Bạn đã có tài khoản?</span>
        <Link className='ml-1 text-red-400 hover:underline hover:text-red-700' to='/login'>
          Đăng nhập
        </Link>
      </div>
      <div className='px-4 pb-2 pt-4 rounded-full'>
        <button className='uppercase block w-full p-5 mt-6 text-2xl rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none'>
          sign up
        </button>
      </div>
    </form>
  )
}
