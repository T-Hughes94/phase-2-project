import React from 'react'
import { NavLink } from 'react-router-dom'

//this is the header component
function Header() {
  return (
<>
 <header>
  <nav>
    <NavLink id="home-link" to='/'>Home</NavLink>
    <NavLink id="about-link" to='/about'>About</NavLink>
    <NavLink id='chart-link' to='/chart'>Chart</NavLink>
  </nav>
      <div id='logo-div'>
        <h1 id='Header-title'>
            FoodEase
        </h1>
        <a href='/'>🔪</a>
      </div>
 <div></div>
    
</header>
</>
  )
}

export default Header