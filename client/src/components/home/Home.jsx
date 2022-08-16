import React from 'react';
import styles from './Home.module.css'
import Gonzalo from './Gonzalo/Gonzalo';
import Nav from '../NavBar/Nav';
import ContactMe from './ContactMe/ContactMe';


export const Home = () => {

	return(
		<div>
			<Nav />
			<div>
			<section id='inicio'  className='divGonzalo'>
			<Gonzalo />
			</section>
			<section id='contactame' className={styles.sectionContact}>
				<ContactMe />
			</section>
			</div>
		</div>
	)
}

export default Home