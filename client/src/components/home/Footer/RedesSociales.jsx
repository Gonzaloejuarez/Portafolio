import React from "react";
import styles from '../Home.module.css';
import {FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
export const RedesSociales = () => {

    return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:'20vh', flexDirection:"column"}}>
        <p style={{fontSize:"2rem"}}>Redes sociales</p>
        <div className={styles.redesSociales}>
                        <a href="https://www.linkedin.com/in/gonzalo-juarez-o2/" target="_BLANK" style={{color:"#0961b8", margin:'1rem'}}>
                        <FaLinkedin size={30}></FaLinkedin>
                        </a>
                        <a href="https://github.com/Gonzaloejuarez" target="_BLANK" style={{color:"#000", margin:'1rem'}}>
                        <FaGithub size={30} />
                        </a>
                        <a href="https://www.instagram.com/gonzaloejuarez/" target="_BLANK" style={{color:"#ec4965", margin:'1rem'}}>
                        <FaInstagram size={30} />
                        </a>
                        <a href="https://twitter.com/Gonzaajua" target="_BLANK" style={{color:"#1d9bf0", margin:'1rem'}}>
                        <FaTwitter size={30} />
                        </a>
						</div>
    </div>
)
}