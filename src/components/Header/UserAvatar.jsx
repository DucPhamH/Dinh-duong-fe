import logo from '../../asset/img/logoHealthy.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserAvatar() {
  const [open, setOpen] = useState(false)
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <div className='group relative inline-block' onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      <button
        className='flex mr-3 items-center text-xl font-bold text-gray-900 rounded-full hover:text-yellow-500 md:mx-7 md:text-xl lg:text-2xl'
        type='button'
      >
        <img className='w-12 h-12 mr-2 rounded-full' src={logo} alt='logo' />
        <div className='hidden md:block'>Phạm Đức</div>
        <svg
          className='w-5 h-5 hidden md:block mx-1.5'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      {open && (
        <div
          className='z-10 fix_hover top-14 right-10 transform scale-0 group-hover:scale-100 absolute
          transition duration-300 ease-in-out md:top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-56'
        >
          <ul className='py-2 text-sm text-gray-700'>
            <li>
              <Link to='/' className='block px-4 py-2 text-2xl hover:bg-gray-100'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='#' className='block px-4 py-2 text-2xl hover:bg-gray-100'>
                Settings
              </Link>
            </li>
          </ul>
          <div className='py-2'>
            <Link to='#' className='block text-red-500 px-4 py-2 text-2xl  hover:bg-gray-100'>
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAvatar
