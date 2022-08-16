import React from 'react'
import styles from '../Home.module.css';

import {FiHome, FiPhone} from 'react-icons/fi';
import {FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import {TbBrandGmail} from 'react-icons/tb';


export const ContactMe = () => {
  return (
    <div className={styles.footer_container}>
					<div className={styles.left}>
						<div className={styles.location}>
							<FiHome size={20} style={{color : "#000", marginRight : "2rem"}} />
							<div >
								<p style={{color: "#000"}} className={styles.parrafo}>
									Buenos Aires, Hurlingham 🇦🇷
								</p>
							</div>
						</div>
						<div className={styles.phone}>
							<FiPhone size={20} style={{color : "#000", marginRight : "2rem"}} />
							<div >
								<p style={{color: "#000"}} className={styles.parrafo}>
									+54 1130449589
								</p>
							</div>
						</div>
						<div className={styles.gmail}>
							<TbBrandGmail size={20} style={{color : "#000", marginRight : "2rem"}} />
							<div >
								<p style={{color: "#000"}} className={styles.parrafo}>
									<a href="" style={{color: "#000", textDecoration:"none"}}>juarezgonzalo000@gmail.com</a>
								</p>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<h4 style={{color:"#000"}} className={styles.parrafo}>Desarrollado por Gonzalo Juarez</h4>
						<p style={{color:"#000"}} className={styles.parrafo}>
							Portfolio diseñado y desarrollado por el Desarrollador Full Stack Gonzalo Juarez.
						</p>
						<div className={styles.redesSociales}>
                        <a href="" style={{color:"#000"}}>
                        <FaLinkedin size={30}></FaLinkedin>
                        </a>
                        <a href="" style={{color:"#000"}}>
                        <FaGithub size={30} />
                        </a>
                        <a href="" style={{color:"#000"}}>
                        <FaInstagram size={30} />
                        </a>
                        <a href="" style={{color:"#000"}}>
                        <FaTwitter size={30} />
                        </a>
						</div>
					</div>
				</div>
  )
}

export default ContactMe