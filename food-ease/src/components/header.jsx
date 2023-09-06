import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
<>
 <header>
  <nav>
    <NavLink id="home-link" to='/'>Home</NavLink>
    <NavLink id="about-link" to='/about'>About</NavLink>
    <NavLink id='chart-link' to='/chart'>Chart</NavLink>
  </nav>
      <h1 id='Header-title'>
          FoodEase 🔪
      </h1>
 <div></div>
    
</header>
</>
  )
}

export default Header