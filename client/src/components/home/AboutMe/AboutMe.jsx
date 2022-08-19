import React from 'react'
import styles from '../../style/AboutMe.module.css';
import imagen from '../../img/971.jpg'
export const AboutMe = () => {
  return (
    <section id='sobreMi' className={styles.divAbout}>
        <div className={styles.div2Ab}>
        </div>
        <div className={styles.divH}>
           <h1>Sobre Mi</h1>
        </div>
        <div className={styles.pregridAbout}>
        <div className={styles.gridAbout}>
            <div className={styles.left}>
                <h2 style={{color:"white"}}>
                Me llamo Gonzalo Juarez, soy tecnico informatico y desarrollador Full Stack. <br />
                Tengo 20 años y estoy cursando el primer año de la tecnicatura universitaria en programacion <br /> en la universidad Nacional de Hurlingham
                </h2>
            </div>
            <div className='right'>
                <div className={styles.divImg}>
                    <img src={imagen} alt="imagenPc"/>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
