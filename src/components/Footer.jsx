import React from 'react'
import { Link } from 'react-router-dom'
import {navItems} from '../constants/index'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5 px-5 mt-10 mb-5'>
        <div>
            <ul className='flex items-center gap-5'>
                {navItems.map((item, index) => (
                <li key={index} className='hover:text-primary uppercase'>
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