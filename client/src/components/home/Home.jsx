import React from 'react';
import styles from './Home.module.css'
import Cover from '../Fondo/Cover';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Contactame from './ContactMe/Contactame';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Habilidades/Skills';
import { Estudio } from './Estudio/Estudio';


export const Home = () => {

	return(
		<div>
			<Cover />
			<div>
			<section id='sobreMi'>
			<AboutMe />
			</section>
			<section id='habilidades'>
			<Skills />
			</section>
			<section id='proyectos'>
			<Projects />
			</section>
			<section id='estudio'>
				<Estudio />
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