import { BsFacebook } from 'react-icons/bs'
function Footer() {
  return (
    <footer className='relative back_ground pt-8 pb-6'>
      <div className='container mx-auto px-10'>
        <div className='flex flex-wrap text-left lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-5xl font-bold text-white'>Let's keep in touch!</h4>
            <h5 className='text-2xl mt-6 mb-6 text-white'>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className='mt-6 lg:mb-0 mb-6 flex'>
              <div className='bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4'>
                <BsFacebook />
              </div>
              <div className='bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4'>
                <BsFacebook />
              </div>
              <div className='bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4'>
                <BsFacebook />
              </div>
              <div className='bg-white text-lightBlue-400 shadow-lg font-normal h-14 w-14 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4'>
                <BsFacebook />
              </div>
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-gray-300 font-semibold text-2xl mb-6'>Useful Links</span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://www.creative-tim.com/presentation?ref=njs-profile'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://blog.creative-tim.com?ref=njs-profile'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://www.github.com/creativetimofficial?ref=njs-profile'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile'
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-gray-300 font-semibold text-2xl mb-6'>Useful Links</span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://www.creative-tim.com/presentation?ref=njs-profile'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://blog.creative-tim.com?ref=njs-profile'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://www.github.com/creativetimofficial?ref=njs-profile'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile'
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <span className='block uppercase text-gray-300 text-2xl font-semibold mb-6'>Other Resources</span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile'
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://creative-tim.com/terms?ref=njs-profile'
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://creative-tim.com/privacy?ref=njs-profile'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-white font-semibold block pb-2 text-xl'
                      href='https://creative-tim.com/contact-us?ref=njs-profile'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-8 border-blueGray-600' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-lg text-white font-semibold py-1'>
              Thông tin trên Website chỉ mang tính chất tham khảo
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
