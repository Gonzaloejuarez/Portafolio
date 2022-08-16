import React from 'react'
import styles from './Gonzalo.module.css'
import gonzalo from '../../img/GonzaloJuarez.jpeg'

export const Gonzalo = () => {
  return (
    <div className={styles.nuevo}>
      <div className={styles.divComponenteInicio}>
      <h1>
          Bienvenidos
        </h1>
        <div className={styles.divGonzalo}>
        <p>
          Bienvenidos a mi Portafolio<br />
          Tecnico Informatico && Desarrollador Full Stack
        </p>
        <p>
          Soy una persona responsable, atenta y autodidacta
        </p>
        </div>
      <div>
      <img className={styles.gonzaloImagen} src={gonzalo}alt="imagen Gonzalo" />
      </div>
      </div>
    </div>
  )
}

export default Gonzalo
