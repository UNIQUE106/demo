import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../App.css"

function Menu() {
  return (
    <nav>
      <ul className='flex gap-5 font-semibold text-[1.1rem] font-mont'>
        <NavLink to="/" className={({isActive, isPending}) => {
          isActive ? "active__nav" : isPending ? "pending__nav" : "active__nav"
        }}>Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  )
}

export default Menu