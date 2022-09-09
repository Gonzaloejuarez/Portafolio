import React from 'react'
import styles from '../../style/AboutMe.module.css';
import imagenComputadora from '../../img/GonzaloJuarez.jpeg'



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
                Soy tecnico informatico y <p  style={{color:"#3BC2D3", fontSize: "25px"}}>Desarrollador Full Stack </p>
                Tengo 20 años y estoy cursando el primer año de la tecnicatura universitaria en programacion en la universidad Nacional de Hurlingham.<br /> 
                <br />
                <br />
                Me considero una persona autodidacta y responsable. Tengo muchas ganas de crecer profesionalmente y siempre seguir aprendiendo nuevas tecnologias
                </h2>
                <h2>
                  
                </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.divImg}>
                <img src={imagenComputadora} alt="imagen" className={styles.divImg} />
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
