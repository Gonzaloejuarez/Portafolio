import React from 'react';
import Gonzalo from './Gonzalo/Gonzalo';
import Nav from '../NavBar/Nav';
export const Home = () => {

	return(
		<div>
			 <Nav />
			<h1>Bienvenidos</h1>
			<section id="#inicio">
				<div> 
					<h1>Gonzalo Juarez Developer</h1>
				</div>
				<Gonzalo />
			</section>
			
		</div>
	)
}

export default Home