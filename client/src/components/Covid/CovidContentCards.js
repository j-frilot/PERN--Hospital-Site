import React from 'react';
import covidContentCardData from './covidContentCardData';

const CovidContentCards = () => {
	return (
		<section className="covid-content grid grid-cols-3 my-4 mx-0">
			<div className=" module covid-content-section my-0 mx-4">
				<h1 className="text-center text-2xl capitalize">
					{covidContentCardData[0].heading_one}
				</h1>
				<ul className="pl-4">
					<li className="py-0.5 px-0 ">
						<p>{covidContentCardData[0].text_one}</p>
					</li>
					<li className="py-0.5 px-0 ">
						<p>{covidContentCardData[0].text_two}</p>
					</li>
				</ul>
			</div>

			<div className=" module covid-content-section image bg-center bg-no-repeat bg-cover rounded"></div>

			<div className=" module covid-content-section">
				<h1 className="text-center text-2xl capitalize">
					{covidContentCardData[2].heading_one}
				</h1>
				<ul className="pl-4">
					<li className="py-0.5 px-0 ">
						<p>{covidContentCardData[2].text_one}</p>
					</li>
					<li className="py-0.5 px-0 ">
						<p>{covidContentCardData[2].text_two}</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default CovidContentCards;
