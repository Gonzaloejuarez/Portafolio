import React from 'react';
import Gonzalo from './Gonzalo/Gonzalo';
import Nav from '../NavBar/Nav';
export const Home = () => {

	return(
		<div>
			<Nav />
			<br />
			<br />
			<br />
			<br />
			<div>
			<section id='inicio'  className='divGonzalo'>
			<Gonzalo />
			</section>
			<section id='contactame'>
				Contactame
			</section>
			</div>
		</div>
	)
}

export default Home