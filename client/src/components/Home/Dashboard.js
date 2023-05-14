import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
	const [dashboard, setDashboard] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/api/dash/')
			.then((res) => res.json())
			.then((res) => {
				setDashboard(res);
			});
	}, []);

	return (
		<section className="dashboard dashboard-card w-10/12 mx-auto grid grid-cols-4 gap-3 text-center">
			{dashboard.map((dash) => (
				<div
					key={dash.section_id}
					className="module dashboard-card my-8"
				>
					<div className="dashboard-card-heading py-2 px-0 capitalize text-gray-200 bg-indigo-500">
						<h3>
							<i className="fas fa-user-md icon"></i>
							<NavLink to={`/${dash.link}`}>
								{' '}
								{dash.heading}
							</NavLink>
						</h3>
					</div>

					<div className="dashboard-card-body pt-4">{dash.body}</div>
				</div>
			))}
		</section>
	);
};

export default Dashboard;
