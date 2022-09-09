import React from 'react';
import style from '../../style/Skills.module.css';
import {FaHtml5, FaReact, FaCss3Alt, FaBootstrap, FaSass, FaNodeJs, FaJava, FaPython} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiRedux, SiMaterialui, SiPostgresql, SiMongodb} from 'react-icons/si'

export const Skills = () => {
  return (
    <section className={style.sectionSkill}>
      <div className={style.laBase}>
      </div>
      <div className={style.primera}>
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:"2rem"}}>Habilidades</h1>
        <h2 style={{color:"#4522F0" ,display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
          Habilidades tecnicas
        </h2>
      </div>
        <div className={style.gridSkill}>
            <div className={style.left}>
                <h3>Desarrollo Front End</h3>
                <div className={style.contenidoFrontend}>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>HTML</h4>
                    <FaHtml5 color='#ED4F19' style={{marginLeft:"5px"}}/>
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>CSS</h4>
                    <FaCss3Alt color='#35C0D7' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>ReactJS</h4>
                    <FaReact color='#3C7ECB' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>Redux</h4>
                    <SiRedux color='#9359E0 ' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>JavaScript</h4>
                    <IoLogoJavascript color='#E4D817 ' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>Bootstrap</h4>
                    <FaBootstrap color='#9359E0' style={{marginLeft:"5px"}}  />
                    </div>
                    <small>Basico</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>SASS</h4>
                    <FaSass color='#E451B5' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>MaterialUI</h4>
                    <SiMaterialui color='#2336DB ' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Basico</small>
                  </article>
                </div>
            </div>
            <div className={style.right}>
                <h3>Desarrollo Back End</h3>
                <div className={style.contenidoBackend}>
                <article>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <h4>NodeJS</h4>
                    <FaNodeJs color='#0C873C' style={{marginLeft:"5px"}} />
                  </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>PostgreSQL</h4>
                    <SiPostgresql color='#3C7ECB' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>MongoDB</h4>
                    <SiMongodb color='#0C873C' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <h4>SQL</h4>
                    <small>Intermedio</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>JAVA</h4>
                    <FaJava color='#C30606 ' style={{marginLeft:"5px"}}/>
                    </div>
                    <small>Basico</small>
                  </article>
                  <article>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <h4>Python</h4>
                    <FaPython color='#DBB405 ' style={{marginLeft:"5px"}} />
                    </div>
                    <small>Basico</small>
                  </article>
                </div>
            </div>
        </div>
        {/* <h2 style={{color:"#4522F0" ,display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
          Habilidades blandas
        </h2> */}

    </section>
  )
}
