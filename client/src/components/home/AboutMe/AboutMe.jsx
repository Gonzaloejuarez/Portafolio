import React from 'react'
import styles from '../../style/AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section id='sobreMi' className={styles.divAbout}>
        <div>
           <h1>Sobre Mi</h1>
        </div>
        <div className={styles.gridAbout}>
            <div className='left' style={{background:"red"}}>
                <h2 style={{color:"white"}}>
                Me llamo Gonzalo Juarez, Soy tecnico informatico y desarrollador Full Stack. <br />
                Tengo 20 años y estoy cursando el primer año de la tecnicatura universitaria en programacion <br /> en la universidad Nacional de Hurlingham
                </h2>
            </div>
            <div className='right' style={{background:"blue"}}>

            </div>
        </div>
    </section>
  )
}
