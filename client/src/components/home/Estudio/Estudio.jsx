import React from 'react'

export const Estudio = () => {
  return (
    <div className='estudio-componente'>
        <div></div>
        <div className='estudio-titulo'>
            <h1>Estudio</h1>
        </div>
        <div className='grid-estudio'>
        <div className='estudio-universidad'>
            <p>Universidad Nacional de Hurlingham</p>
            <p>Mayo 2022 - Actualmente</p>
            <img src="" alt="icono de la universidad" />
        </div>  
        <div className='estudio-henry'>
            <p>Bootcamp Henry</p>
            <p>Marzo 2021 - Octubre 2021</p>
            <img src="" alt="icono de henry" />
        </div>
        <div className='estudio-tecnica'>
            <p>Escuela Tecnica Numero 1</p>
            <p>marzo 2014 - noviembre 2020</p>
            <img src="" alt="icono de la tecnica" />
        </div>
        </div>
    </div>
  )
}
