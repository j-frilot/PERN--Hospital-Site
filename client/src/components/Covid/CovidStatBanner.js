import React, { useState, useEffect } from 'react';

const CovidStatBanner = () => {
	const [stats, setStats] = useState([]);
	useEffect(() => {
		fetch('https://corona.lmao.ninja/v3/covid-19/states/mississippi')
			.then((response) => response.json())
			.then((response) => {
				setStats(response);
			});
	}, []);

	const uTime = stats.updated;
	const dateObject = new Date(uTime);
	const humanDateFormat = dateObject.toLocaleString();

	return (
		<section className="covid-stat-banner m-auto p-8 text-center text-indigo-950">
			<div className="covid-stat-card-row flex flex-wrap justify-around text-center text-indigo-950">
				<div className="module card card-cases m-1 p-6 text-indigo-950 rounded-lg shadow-md bg-gray-200">
					<p className="card-cases-heading text-2xl">Total Cases:</p>
					<p className="card-cases-body text-2xl font-semibold">
						{' '}
						{stats.cases}
					</p>
				</div>
				<div className="module card card-cases m-1 p-6 text-indigo-950 rounded-lg shadow-md bg-gray-200">
					<p className="card-cases-heading text-2xl">Total Deaths:</p>
					<p className="card-cases-body text-2xl font-semibold">
						{' '}
						{stats.deaths}
					</p>
				</div>
				<div className="module card card-cases m-1 p-6 text-indigo-950 rounded-lg shadow-md bg-gray-200">
					<p className="card-cases-heading text-2xl">Active Cases:</p>
					<p className="card-cases-body text-2xl font-semibold">
						{stats.active}
					</p>
				</div>
				<div className="module card card-cases m-1 p-6 text-indigo-950 rounded-lg shadow-md bg-gray-200">
					<p className="card-cases-heading text-2xl">New Cases:</p>
					<p className="card-cases-body text-2xl font-semibold">
						{stats.todayCases}
					</p>
				</div>
				<div className="module card card-cases m-1 p-6 text-indigo-950 rounded-lg shadow-md bg-gray-200">
					<p className="card-cases-heading text-2xl">New Deaths:</p>
					<p className="card-cases-body text-2xl font-semibold">
						{stats.todayDeaths}
					</p>
				</div>
			</div>
			<p>Last Updated: {humanDateFormat}</p>
		</section>
	);
};

export default CovidStatBanner;
