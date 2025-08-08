import { useEffect, useState } from 'react'
import NavButton from './NavButton'
import Logo from '/src/assets/images/logo.png'
import 'boxicons/css/boxicons.min.css'

const Header = () => {

    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => {
        const mobileMenu = document.getElementById("menu")

        if(mobileMenu.classList.contains("hidden")){
            mobileMenu.classList.remove('hidden')
        }else{
            mobileMenu.classList.add('hidden')
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] transition-colors duration-300 border-[#babaff]
        ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}
    >

        <div className='flex lg:gap-14 gap-4 items-center'>
            <img src={Logo} alt="logo" 
                className='md:w-16 w-12'
            />

            <div className='hidden md:flex gap-5 items-center'>
                <button className='h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300 cursor-pointer'>
                    PLAY NOW
                </button>

                <button className='h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300 cursor-pointer'>
                    PRODUCTS
                </button>
            </div>
        </div>

        <nav className='hidden md:flex lg:gap-8 gap-4'>

            <NavButton icon={'bx bx-user-circle'} text={'Avatar'} />
            <NavButton icon={'bx bxs-diamond'} text={'Arena'} />
            <NavButton icon={'bx bx-chevrons-up'} text={'Beyond'} />
            <NavButton icon={'bx bxs-store'} text={'Shop'} />

        </nav>

        {/* Mobile Menu - visible mobile*/}
        <button onClick={toggleMenu}  className='text-3xl p-2 md:hidden cursor-pointer'>
            <i className='bx bx-menu'></i>
        </button>

        {/* Mobile Menu - default hidden*/}
        <div id='menu'
        className='hidden fixed top-18.5 right-0 left-0 p-5 md:hidden'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <nav className='flex flex-col gap-4 items-center'>
                <NavButton icon={'bx bx-user-circle'} text={'Avatar'} />
                <NavButton icon={'bx bxs-diamond'} text={'Arena'} />
                <NavButton icon={'bx bx-chevrons-up'} text={'Beyond'} />
                <NavButton icon={'bx bxs-store'} text={'Shop'} />
            </nav>

            <div className='flex flex-col gap-3 w-full mt-4'>
                <button className='bg-purple-700 py-2 rounded cursor-pointer'>
                    Play Now!
                </button>
                
                <button className='bg-gray-500 py-2 rounded cursor-pointer'>
                    NFT Store
                </button>
            </div>
        </div>

    </header>
  )
}

export default Header