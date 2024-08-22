import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/mycontext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  // console.log(user.user.email)

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "hemraj@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                 <div className="hidden lg:ml-6  lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACUCAMAAAAgTdyMAAAAolBMVEX/Zx8Eajj/////VAAAWA//1MrK1cwAAIkAAIwGA40AAIbZ2enc3OsAAH/8/P7v7/b29vrn5/G6utiOjsDNzeK/v9rU1Obh4e1lZaufn8JycrGurtHHx99SUqF+frCGhrx5ea+ZmceMjLg2NpSyssxCQpygoMlISJ1dXaiSkrogIIpqaqZQT6MyMpQTEo0uLpUwMIYgH5IqKoY4OIohIYRUVJphGrhOAAADzklEQVR4nO2ai47bKBRAs7S7EPwAg1+xndiOEzuxJ5lJs/P/v7aQkapK3arVam8q0D2SHdmKBEcXuBhYrRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZD/lU8+s/rTZ1bEZ55nF4ukKMKiSET8tDKfZRdmY3Vc84ivh3LMgieV+hy7ZjdRTikzN0bN7bjLnlLuM+yKcuaUm7ix7elk48cZv73nTygZ3k52ETWUo9yfSUg2XVxXJoA0qiR42eB2wWQidVpKEdjBpLavUlmVpWmgA3j4oO3SgbOLDmVIRGMee3OFASlE0g+MDgq4dGC7fDZNcIkfY0hrrspc2j4o0kWc3oD1YO2KiPGyV0SO5qEzTfPF/JbmUgVpdMVZlIKWD2qXXIzcI7eN5q5Mp7uY7GBMk0f8wurKXgvICkDayY6y1zyxzVJ0kiQLIW+E7AISd4l5lxXhkdFKANYA0q6hLJpTktuBsj4QuRXkLZYvgijbUOuUBINpuZBdD9BOHGmkbBrI+thk9CIuFXmTzSlObGsdrZVsInYDDB6gnYroJG0TJPVZmixONmf5Jdm0xGT1eLThI0KeaNTDVQHQbmZRIxtlQ7PZSXFp0m34li9Z/lrE570JqswakXNG4aoAZ2eyQVSRONQ2SvtFbKb8lt7VLXjfy53NDnVrpi/a/KsBqwOcXWvmljYbxPXQmFFyK+Z219ybpZ/FUkqSTqPtk0nJaAlWBzi7iQ7pxzw5WY5B0h3zRatjdl6ysizC7ftHopPBi+mdUHUAswsHuoR5mjV2XKmHJdvvRq1OjR7Pnerm2gROpFkaFB1/BZtNg9llMy0FKVLVdrqRyfm+P7R6ezm1+tBPuojTvmtVGhJZ0WsNVQkwu5Gx6EAeyyn98Pekg3E7Xs2X+bUv+6Cfvgy6eCywqIhRDVUJMDtN1+3X/iT0dG/N4L9er1mU6/ukk69/HK98D1UJODt+q0WQZupwqDebTX0YK7628GqsP94clOl3STaj3X/jt7fMuHexZY5rn0cVvzPCr2dz6mA2/24mNvk0E/N8Fu33F9CvfL2m9uuVw1UBeOVBPBZNfrzyEDu78iCOlPu7akQa7vGKn+ertd+utIferbR7vkvy0x2u2ekdrp/sTl6gzwaA7yyHPu8se34qgPz7iY755MeJDovPp3EsPp+ksvh8Cu73sPrLZ1affWb1h8+gnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbugnbv4bfcPRSX2cqtZEHIAAAAASUVORK5CYII="
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   <Link to={'/signup'}  className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>}

                  {user?.user?.email === 'hemraj@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {user ?  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/png;base64,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"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar