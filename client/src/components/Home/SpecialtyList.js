import React, { useState, useEffect } from 'react';

const SpecialtyList = () => {
	const [specialties, setSpecialties] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000/api/physicians/')
			.then((response) => response.json())
			.then((response) => {
				setSpecialties(response);
			});
	}, []);

	return (
		<section className="specialties container">
			<div className="specialties-heading">
				<h2>Our Specialties</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Mollitia, totam.
				</p>
			</div>

			<div className="specialties-grid">
				{specialties.slice(0, 6).map((specialty) => (
					<div
						key={specialty.physicians_id}
						className="module specialties-grid-item"
					>
						<img
							src={`images/${specialty.photo}`}
							alt="physician"
							className="physician-img"
						/>
						<p>{specialty.specialty}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SpecialtyList;
