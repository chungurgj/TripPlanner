import { useEffect, useState } from 'react'
import Logo from '../img/logo.png'
import Search from '../img/search.png'
import Menu from '../img/menu.png'
import User from '../img/user.png'

const Navbar = () => {
  const [scrolled,setScrolled] = useState(false)
  const [changeNavbar,setChangeNavbar] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      const offset = window.scrollY
      if(offset>0)
          setScrolled(true)
      else
        setScrolled(false)

      if(offset>300)
        setChangeNavbar(true)
      else
        setChangeNavbar(false)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <nav className={`bg-white ${scrolled ? 'border-b-[1px]' : ''} flex flex-col justify-center items-center py-3   sticky top-0 z-10`}>
      <div className='navbar-content w-full flex flex-col gap-4 sm:w-4/5 2xl:w-3/5'>
      <div className='px-5 lg:p-0 flex justify-between items-center gap-2 md:gap-5 '>
        <img src={Menu} className='h-5 w-5 sm:h-6 sm:w-6 lg:hidden inline' />
        <div className='flex justify-center items-center gap-2'>
          <div className='w-8 h-8'>
            <img src={Logo} className='w-full h-full' />
          </div>
          
              <span className={`font-semibold text-2xl md:inline ${changeNavbar && 'hidden'}`}>TripPlanner</span>
        </div>
      {/* koga e pomalce od md screen width i koga changeNavbar e true */}
        {changeNavbar ?
         <div className='flex gap-3 border-2 rounded-full px-3 py-2 sm:px-4 md:w-[35%] navbar-input justify-start items-center'>
          <img src={Search} className='h-4 w-4' />
          <input type="text" placeholder='Search' className='w-full' />
        </div> : <></>}
        <img src={User} className='h-6 w-6  md:hidden inline' />
        <ul className='lg:flex hidden nav-group'>
             <li>Discover</li>
             <li>Trips</li>
             <li>Review</li>
             <li>More</li>
         </ul>
         <div className='md:flex justify-center items-center gap-5 hidden'>
          <span className='bg-black text-white px-3 py-2  rounded-full hover:cursor-pointer whitespace-nowrap'>Sign up</span>
         </div>
      </div>
      {changeNavbar ? <ul className={`lg:flex gap-4 hidden`}>
        <li>Hotels</li>
        <li>Things to Do</li>
        <li>Restaurants</li>
        <li>Flights</li>
        <li>Vacation Rentals</li>
        <li>Cruises</li>
        <li>Rental Cars</li>
        <li>Forums</li>
      </ul> : <></>}
      </div>
    </nav>
  )
}

export default Navbar