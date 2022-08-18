import React from 'react';
import styles from './Home.module.css'
import Inicio from './Inicio/Inicio';
import Nav from '../NavBar/Nav';
import Footer from './Footer/Footer';
import Contactame from './ContactMe/Contactame';
import { AboutMe } from './AboutMe/AboutMe';


export const Home = () => {

	return(
		<div>
			<Nav />
			<div>
			<section id='inicio'>
			<Inicio />
			</section>
			<section id='sobreMi'>
			<AboutMe />
			</section>
			<section id='contactame'>
			<Contactame />
			</section>
			<section className={styles.sectionContact}>
			<Footer />
			</section>
			</div>
		</div>
	)
}

export default Home