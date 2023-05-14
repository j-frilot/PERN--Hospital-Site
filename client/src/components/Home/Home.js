import React from 'react';
import SpecialtiesList from './SpecialtyList';
import Dashboard from './Dashboard';

const Home = () => {
	return (
		<main>
			<section className="hero bg-center bg-no-repeat bg-cover relative">
				<div className="hero-content text-center absolute top-1/2 left-1/2"></div>
			</section>
			<Dashboard />
			<SpecialtiesList />
		</main>
	);
};

export default Home;
