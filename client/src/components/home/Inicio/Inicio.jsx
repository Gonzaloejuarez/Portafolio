import React from 'react'
import styles from '../../style/Inicio.module.css'
import gonzalo from '../../img/GonzaloJuarez.jpeg';
import {FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
export const Inicio = () => {
  return (
    <div className={styles.nuevo}>
      <div className={styles.divComponenteInicio}>
        
        <div style={{display:"flex", justifyContent:"center"}}>
          {/* <h2 style={{color:"#fff"}}>Bienvenidos a mi Portafolio</h2> */}
        </div>
        <div className={styles.divGonzalo}>
      <div className={styles.imagen}>
        <img src={gonzalo}alt="imagen Gonzalo" />
      </div>
      <div className={styles.preAbout}>
      <h1 className={styles.Des}>
          Desarrollador Full Stack
      </h1>
      <h3  style={{color:"#2C54E4", marginTop:"2rem" , fontSize:"1.3rem"}}>Hola!<br/> Bienvenidos a mi pagina web </h3>
      <button className={styles.button}>
      <a href="#contactame" className={styles.article}>Contactame</a>
      </button>
      <div className={styles.redesSociales}>
            <a href="https://www.linkedin.com/in/gonzalo-juarez-o2/" target="_BLANK" style={{color:"#0961b8"}} className={styles.red}>
            <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a href="https://github.com/Gonzaloejuarez" target="_BLANK" style={{color:"#000"}} className={styles.red}>
            <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/gonzaloejuarez/" target="_BLANK" style={{color:"#ec4965"}} className={styles.red}>
            <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com/Gonzaajua" target="_BLANK" style={{color:"#1d9bf0"}} className={styles.red}>
            <FaTwitter size={30} />
            </a>
					</div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
