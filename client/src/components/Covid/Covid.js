import React from 'react';
import CovidStatBanner from './CovidStatBanner';
import CovidContentCards from './CovidContentCards';

const Covid = () => {
	return (
		<main className="w-10/12 mx-auto">
			<section className="covid-banner flex w-full h-96">
				<div className="covid-banner-text w-1/2 p-11 text-center order-1 bg-gray-100">
					<h1>COVID-19 In Mississippi</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Repudiandae ipsam ratione maiores.
					</p>
				</div>
				<div className="covid-banner-asset w-9/12 h-full order-2">
					<div className="covid-banner-img w-full h-full bg-cover bg-no-repeat"></div>
				</div>
			</section>
			<CovidStatBanner />
			<CovidContentCards />
		</main>
	);
};

export default Covid;
