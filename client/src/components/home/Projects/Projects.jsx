import React from 'react'
import Slide from './Slides/Slides'
import style from '../../style/Projects.module.css'

export const Projects = () => {
  return (
    <div>
      <div className={style.divProyectos}></div>
      <h1 className={style.titulo}>Proyectos</h1>
      <Slide />
      </div>
  )
}

export default Projects
