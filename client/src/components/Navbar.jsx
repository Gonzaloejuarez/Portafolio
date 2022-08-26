import React,{useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import './Navbar.css';
import { DataNav } from './NavBar/Data';


export const Navbar = () => {
const [scroll, setScroll] = useState(0);
const [open, setOpen] =  useState(false);

const goTop = () => {
    window.scrollTo({top: 0, left:0, behavior:'smooth'})
}

const handleClose = () => {
    setOpen(!open)
}

const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position)
}

/* const barRight= setOpenNav(!openNav) */

useEffect(() => {
    window.addEventListener('scroll', handleScroll)
},[scroll])

  return (
    <footer className={`navbar ${scroll > 20 ? 'scrolling' : null}`} >
       <p className='navbar-name' onClick={goTop}> Gonzalo Juarez</p>
        <ul className={open ? "lista active" : "lista"}>
            {
                DataNav.map(({to, name}) => (
                        <li className='listas'>
                            <a href={to} className='active' onClick={handleClose}>
                                <p className='parrafo'>{name}</p>
                            </a>
                        </li>
                ))
            }
        </ul>
        <div className='menu' onClick={handleClose}>
        {open ? (
          <FaTimes size={20} className='button'/>
          ):(
            <FaBars size={20} className='button'/>
            )
        }
      </div>
    </footer>
  )
}
