import React from "react";
import Logo from '../img/pokeapi.png'

export default function Navbar() {
  return (
    <div>
      <img src={Logo} alt='Logo pokeapi' className='navbar_img' />
    </div>
  )
}
