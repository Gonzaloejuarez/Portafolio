import React,{useState} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa'
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
              <li>
                <a href={to} onClick={openNav}>
                <p>{name}</p>
                </a>
              </li>
          ))
        }
        </ul>
      <div className={styles.menu} onClick={openNav}>
        {open ? (
          <FaTimes size={20} style={{color: "#fff"}}/>
          ):(
            <FaBars size={20} style={{color: "#fff"}} />
            )
        }
      </div>
    </div>
  )
}


export default Nav


/* <div className={styles.componenteNav}>
      <a>
      <FaIcons.FaBars onClick={openNav}/>
      </a>
      <nav className={open ? styles.sidebarOpen : styles.sidebar}>
      <section className={styles.sectionNavBar}>
          <a>
            <AiIcons.AiOutlineClose onClick={openNav}/>
          </a>
        
        <h2>Navegar</h2>
        {
          DataNav.map(({name, to}) => (
            <div className={styles.divData}>
            <ul>
            <a href={to}
            onClick={openNav}
            className={styles.articleNav}
            >
              <p>{name}</p> 
            </a>
            </ul>
            </div>
            ))
          }
      </section>
        </nav>
      </div> */