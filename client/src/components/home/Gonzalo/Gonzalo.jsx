import React from 'react'
import styles from './Gonzalo.module.css'
import gonzalo from '../../img/GonzaloJuarez.jpeg'

export const Gonzalo = () => {
  return (
    <div className={styles.nuevo}>
      <div className={styles.divComponenteInicio}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <h2 style={{color:"#fff"}}>Bienvenidos a mi Portafolio</h2>
        </div>
        <div className={styles.divGonzalo}>
      <div className={styles.imagen}>
      <img src={gonzalo}alt="imagen Gonzalo" />
      </div>
      <div className={styles.preAbout}>
      <h1 size={30}>
          Desarrollador Full Stack && Tecnico informatico
      </h1>
      <div className={styles.button}>
      <a href="#contactame" className={styles.article}>Contactame</a>
      </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Gonzalo
