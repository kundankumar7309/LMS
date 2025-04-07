import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='w-full mt-10 text-left bg-gray-900 md:px-36'>
      {/* Top Section */}
      <div className='flex flex-col items-start justify-between gap-10 px-8 py-10 border-b md:flex-row border-white/30'>
        {/* Logo and Description */}
        <div className='flex flex-col items-center w-full md:items-start md:w-1/3'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-sm text-center md:text-left text-white/80'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex necessitatibus maiores vitae recusandae reprehenderit in odit, ad corrupti dolor atque veniam totam repudiandae est aliquid sunt excepturi saepe dicta ratione!
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col w-full md:w-1/4'>
          <h3 className='text-sm font-semibold text-white'>Company</h3>
          <ul className='mt-4 space-y-2 text-sm text-white/80'>
            <li><a href='#' className='hover:text-white'>About</a></li>
            <li><a href='#' className='hover:text-white'>Careers</a></li>
            <li><a href='#' className='hover:text-white'>Press</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div className='flex flex-col w-full md:w-1/4'>
          <h3 className='text-sm font-semibold text-white'>Help</h3>
          <ul className='mt-4 space-y-2 text-sm text-white/80'>
            <li><a href='#' className='hover:text-white'>FAQs</a></li>
            <li><a href='#' className='hover:text-white'>Contact Us</a></li>
            <li><a href='#' className='hover:text-white'>Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <p className='py-4 text-xs text-center text-white/60 md:text-sm'>
        copyright 2025 @ E-Learning. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
