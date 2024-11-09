import React from 'react'
import { Link } from 'react-router-dom'
import {navItems} from '../constants/index'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 px-5 border-t border-neutral-600 my-10 pt-10'>
        <div>
            <ul className='flex items-center gap-5'>
                {navItems.map((item, index) => (
                <li key={index} className='hover:text-green-600 uppercase'>
                    <Link to={item.link}>{item.label}</Link>
                </li>
                ))}
            </ul>
        </div>
        <div>
            <img src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-200x35.png" alt="logo" />
        </div>
        <div>
            <p className='uppercase'>Copyright © 2024 Planet Earth Store</p>
        </div>
    </footer>
  )
}

export default Footer