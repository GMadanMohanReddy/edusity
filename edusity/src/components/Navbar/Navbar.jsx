import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(flase);
    })
  },[]);

  const [menu, setMenu] = useState(false);

  const toggleMenu = ()=>{
    menu?setMenu(false):setMenu(true);
  }
  return (
    <nav className={`navbar_container ${sticky?'dark_nav':''} `}>
         <p className='head'> University of Southampton </p>
         
         <div className={`navbar_buttons ${menu ?'': 'hide-menu'}`}> 
            <a> <Link to='hero' smooth={true} offset={0} duration={400} >Home</Link></a>
            <a href=""><Link to='Program' smooth={true} offset={-250} duration={400} >Program</Link></a>
            <a href=""><Link to='about' smooth={true} offset={-260} duration={400} >About</Link></a>
            <a href=""><Link to='campus' smooth={true} offset={-260} duration={400} >Campus</Link></a>
            <a href=''><Link to='Testimonials' smooth={true} offset={-260} duration={400} >Testimonials</Link></a>
            <a><Link to='contact' smooth={true} offset={-260} duration={400} className='btn' >Contact</Link></a>
         </div>
         <img src={menu_icon} className='menu' alt="" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
