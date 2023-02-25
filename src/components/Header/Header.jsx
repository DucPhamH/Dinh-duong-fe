import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../asset/img/logoHealthy.png'
import Navbar from './Navbar'
import Search from './Search'

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
      <div className='flex justify-between items-center pt-4 pb-8 px-8 mx-auto max-w-screen-xl md:px-4'>
        <button
          onClick={handleActiveMenu}
          className='block md:hidden relative z-30 focus:outline-none transform  -translate-x-1/2 -translate-y-1/2 active:scale-75 transition-transform'
        >
          <AiOutlineMenu className='text-3xl' />
        </button>
        <Link to='/' className='w-20 md:w-28'>
          <div className='flex'>
            <img src={logo} alt='logo' />
            <div class='text-3xl pl-2 md:flex items-center font-bold tracking-wide'>
              Dinh <span class='text-yellow-500'>Duong</span>
            </div>
          </div>
        </Link>
        <Navbar activeMenu={activeMenu} />
        <button
          onClick={handleActiveSearch}
          className='search-menu flex justify-center items-center h-12 px-8 font-bold text-gray-100 bg-yellow-500 whitespace-nowrap hover:bg-yellow-600 hover:text-white
    rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none'
        >
          <FaSearch />
        </button>
      </div>
      <Search activeSearch={activeSearch} />
    </div>
  )
}

export default Header
