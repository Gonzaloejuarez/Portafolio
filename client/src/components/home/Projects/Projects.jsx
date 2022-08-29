import React,{useState} from 'react'
import Slide from './Slides/Slides'
import style from '../../style/Projects.module.css'



export const Projects = () => {

  return (
    <div>
      <div className={style.divProyectos}></div>
      <h1 className={style.titulo}>Proyectos</h1>
      <div style={{display:"flex" ,alignItems:"center", justifyContent:"center"}}>
      <Slide />
      </div>
      </div>
  )
}

export default Projects
