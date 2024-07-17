import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

      useEffect(()=>{
        window.addEventListener('scroll', ()=> {
          window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
      }, [])

  return (
    <nav className={`Container ${sticky? 'dark-nav': ''}`}>
        <h1>Juniper Brinegar</h1>
        <ul>
            <li><Link to='photos' smooth={true} offset={0} duration={1000}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={1000}>About</Link></li>
            <li><Link to='contacts' smooth={true} offset={0} duration={1000}>Contact</Link></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
