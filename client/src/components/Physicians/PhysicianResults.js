import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const PhysicianResults = (props) => {
	const [allDoctors, setAllDoctors] = useState([]);
	const [inputBar, setInputBar] = useState('');
	const [filteredDoctor, setFilteredDoctor] = useState([]);

	useEffect(() => {
		fetch(`  http://localhost:4000/api/physicians`)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setAllDoctors(response);
			});
	}, []);

	useEffect(() => {
		setFilteredDoctor(
			allDoctors.filter((Doc) => {
				return Doc.first_name
					.toLowerCase()
					.includes(inputBar.toLowerCase());
			})
		);
	}, [inputBar, allDoctors]);

	return (
		<>
			<section className="filter">
				<form className="w-10/12 form-container">
					<input
						type="text"
						className="form-input"
						placeholder="Search Physicians"
						onChange={(e) => setInputBar(e.target.value)}
					/>
				</form>
			</section>

			<section className="results">
				<ul className="results-ul grid grid-cols-3">
					{filteredDoctor.map((result) => (
						<li
							className="module results-item m-8 p-6 text-indigo-950 rounded-lg bg-gray-200 shadow-md"
							key={result.physicians_id}
						>
							<NavLink
								className="results-item-flex flex flex-col align-center"
								to={`/physicians/${result.physicians_id}`}
							>
								<div className="results-item-img">
									<img
										src={`images/${result.photo}`}
										alt="physician"
										className="physician-img w-auto align-middle"
										style={{ height: '250px' }}
									/>
								</div>
								<div className="results-item-info flex flex-col p-4 capitalize font-bold text-lg ">
									<span className="info-heading ">
										{result.first_name} {result.last_name}{' '}
										{result.suffix}
									</span>

									<span className="info-body flex flex-col font-normal">
										<p>{result.specialty}</p>
										<p className="bg">
											Request An Appointment
										</p>
									</span>
								</div>
							</NavLink>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default PhysicianResults;
