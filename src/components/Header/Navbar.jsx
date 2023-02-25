import { NavLink } from 'react-router-dom'
function Navbar({ activeMenu }) {
  const listItems = [
    {
      id: 0,
      title: 'Home',
      route: '/'
    },
    {
      id: 1,
      title: 'Thực Đơn',
      route: '/thuc-don'
    },
    {
      id: 2,
      title: 'Kiến thức',
      route: '/kien-thuc'
    },
    {
      id: 3,
      title: 'Món ăn',
      route: '/mon-an'
    },
    {
      id: 4,
      title: 'Góc chia sẻ',
      route: '/chia-se'
    }
  ]
  return (
    <div
      className={`fixed flex ${
        activeMenu ? 'hidden' : ''
      } inset-0 transition-all bg-white/70  backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 flex-col md:flex-row md:space-x-8 -mt-56 md:mt-0 `}
    >
      <ul className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-16 lg:md:-x-8 lg:bg-transparent'>
        {listItems.map((item) => {
          return (
            <li key={item.id} className='text-xl z-10 md:text-xl lg:text-2xl lg:bg-transparent font-semibold '>
              <NavLink to={item.route} className={({ isActive }) => (isActive ? `text-yellow-500` : ``)}>
                {item.title}
                <div className='h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out'></div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
