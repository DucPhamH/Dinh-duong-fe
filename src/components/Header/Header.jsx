import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../asset/img/logoHealthy.png'
import Navbar from './Navbar'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import UserAvatar from './UserAvatar'

function Header() {
  const [activeMenu, setActiveMenu] = React.useState(true)
  const [activeSearch, setActiveSearch] = React.useState(false)

  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch)
  }

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu)
  }
  return (
    <div className='w-full top-0 fixed z-10 text-gray-900 '>
      <div className='bg-red-500'>
        <div className='marquee text-2xl text-yellow-200 font-bold'>
          <p>Liên lạc số điện thoại: 0858349589 để được hỗ trợ tư vấn</p>
        </div>
      </div>
      <div className='flex items-center pt-4 pb-8 px-8 mx-auto max-w-screen-xl justify-between md:px-4'>
        <button
          onClick={handleActiveMenu}
          className='block md:hidden relative z-30 focus:outline-none transform  -translate-x-1/2 -translate-y-1/2 active:scale-75 transition-transform'
        >
          <AiOutlineMenu className='text-3xl' />
        </button>
        <Link to='/' className='w-20 md:w-24 lg:w-28'>
          <div className='flex'>
            <img src={logo} alt='logo' />
            <div className='text-2xl pl-2 hidden md:flex items-center font-bold md:text-2xl lg:text-3xl tracking-wide'>
              Dinh <span className='text-yellow-500'>Duong</span>
            </div>
          </div>
        </Link>
        <Navbar activeMenu={activeMenu} />
        <div className='flex justify-center items-center'>
          <ShoppingCart />
          <UserAvatar />
          {/* <Link
              to='/login'
              className='relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200'
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
                Đăng nhập
              </span>
            </Link> */}
          <button
            onClick={handleActiveSearch}
            className='search-menu flex justify-center items-center h-12 px-8 font-bold text-gray-100 bg-yellow-500 whitespace-nowrap hover:bg-yellow-600 hover:text-white
    rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none'
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <Search activeSearch={activeSearch} />
    </div>
  )
}

export default Header
