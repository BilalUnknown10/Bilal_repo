import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className = 'navbar_main_div'>
        <div>
          <h1>LOGO</h1>
        </div>

        <div className='navbar_pages'>
          <li><NavLink className={'navLink'} to={'/'}>Home</NavLink></li>
          <li><NavLink className={'navLink'} to={'/product'}>Products</NavLink></li>
          <li><NavLink className={'navLink'} to={'/blogs'}>Blogs</NavLink></li>
          <li><NavLink className={'navLink'} to={'/contact'}>Contact Us</NavLink></li>
        </div>

        <div className='navbar_get_quote'>
          <button>Get a Quote</button>
        </div>   
    </div>
  )
}

export default Navbar
