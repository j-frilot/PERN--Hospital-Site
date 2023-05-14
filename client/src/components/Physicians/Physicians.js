import React from 'react';

import PhysicianResults from './PhysicianResults';

const Physicians = (props) => {
	return (
		<main>
			<section className="banner-container relative w-full bg-top bg-no-repeat bg-cover">
				<div className="hero-content text-center absolute top-1/2 left-1/2">
					<h2>Find A Doctor</h2>
				</div>
			</section>
			<div className="directory">
				<PhysicianResults />
			</div>
		</main>
	);
};

export default Physicians;
