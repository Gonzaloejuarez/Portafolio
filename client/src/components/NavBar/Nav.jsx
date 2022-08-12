import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styles from './Nav.module.css';
import { DataNav } from './Data'
export const Nav = () => {

  const [open, setOpen] = useState(false)

  const openNav = () => setOpen(!open)

  return (
    <div>
      <div className={styles.componenteNav}>
      <a >
      <FaIcons.FaBars onClick={openNav}/>
      </a>
      <nav className={open ? styles.sidebarOpen : styles.sidebar}>
        <ul>
          <a>
            <AiIcons.AiOutlineClose onClick={openNav}/>
          </a>
        </ul>
        {
          DataNav.map((index) => (
            <li>
              <a href="#Inicio"></a>
              {index.name}
              </li>
            ))
          }
        </nav>
      </div>
    </div>
  )
}


export default Nav
