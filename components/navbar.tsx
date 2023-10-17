import Image from 'next/image'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useCallback, useEffect, useState } from 'react'

import NavbarItem from './navbar-item'
import MobileMenu from './mobile-menu'
import AccountMenu from './account-menu'

const TOP_OFFSET = 60

export default function Navbar() {
   const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
   const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false)
   const [showBackground, setShowBackground] = useState<boolean>(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= TOP_OFFSET) setShowBackground(true)
         else setShowBackground(false)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const toggleMobileMenu = useCallback(() => {
      setShowMobileMenu((current) => !current)
   }, [])

   const toggleAccountMenu = useCallback(() => {
      setShowAccountMenu((current) => !current)
   }, [])

   return (
      <nav className='w-full fixed z-40'>
         <div
            className={`${
               showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
            } px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 `}>
            <div className='h-auto w-auto lg:h-8'>
               <Image src='/images/logo.png' alt='Netflix Logo' width={100} height={32} />
            </div>
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
               <NavbarItem label='Home' />
               <NavbarItem label='Series' />
               <NavbarItem label='Films' />
               <NavbarItem label='New & Popular' />
               <NavbarItem label='My List' />
               <NavbarItem label='Browse by Language' />
            </div>

            {/* responsive nav */}
            <div
               onClick={toggleMobileMenu}
               className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
               <p className='text-white'>Browse</p>
               <BsChevronDown
                  className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}
               />
               <MobileMenu visible={showMobileMenu} />
            </div>

            <div className='flex flex-row ml-auto gap-7 items-center'>
               <div className='text-gray-200 hover:text-gray-600 cursor-pointer transition'>
                  <BsSearch />
               </div>
               <div className='text-gray-200 hover:text-gray-600 cursor-pointer transition'>
                  <BsBell />
               </div>
               <div
                  onClick={toggleAccountMenu}
                  className='flex flex-row items-center gap-2 cursor-pointer relative'>
                  <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                     <Image
                        src='/images/default-blue.png'
                        alt='Profiles'
                        className='object-cover'
                        width={50}
                        height={50}
                     />
                  </div>
                  <BsChevronDown
                     className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}
                  />
                  <AccountMenu visible={showAccountMenu} />
               </div>
            </div>
         </div>
      </nav>
   )
}
