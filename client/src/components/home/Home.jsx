import React from 'react';
import styles from './Home.module.css'
import Gonzalo from './Gonzalo/Gonzalo';
import Nav from '../NavBar/Nav';
import ContactMe from './ContactMe/ContactMe';
import Formulario from './Formulario';


export const Home = () => {

	return(
		<div>
			<Nav />
			<div>
			<section id='inicio'  className='divGonzalo'>
			<Gonzalo />
			</section>
			<div>
			<Formulario />
			</div>
			<section className={styles.sectionContact}>
			<ContactMe />
			</section>
			</div>
		</div>
	)
}

export default Home