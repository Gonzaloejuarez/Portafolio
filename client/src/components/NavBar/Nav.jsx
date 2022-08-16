import React,{useState} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import "./Nav.css"
import { DataNav } from './Data'
export const Nav = () => {

  const [open, setOpen] = useState(false)

  const openNav = () => setOpen(!open)

  return (
    <div className={styles.divNav}>
      <h1>Gonzalo Juarez</h1>
      <ul className={open ? "lista active" : "lista"}>
        {
        DataNav.map(({to, name}) => (
              <li className={styles.listas}>
                <a className={styles.active} href={to} onClick={openNav} >
                <p className={styles.parrafo}>{name}</p>
                </a>
              </li>
          ))
        }
        </ul>
      <div className={styles.menu} onClick={openNav}>
        {open ? (
          <FaTimes size={20} className='button'/>
          ):(
            <FaBars size={20} className='button'/>
            )
        }
      </div>
    </div>
  )
}
export default Nav
