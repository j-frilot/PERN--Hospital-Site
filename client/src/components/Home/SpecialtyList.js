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
		<section className="specialties w-10/12 mx-auto my-4">
			<div className="specialties-heading py-4 px-0">
				<h2>Our Specialties</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Mollitia, totam.
				</p>
			</div>

			<div className="specialties-grid flex flex-wrap justify-evenly align-center py-4">
				{specialties.slice(0, 6).map((specialty) => (
					<div
						key={specialty.physicians_id}
						className="module specialties-grid-item font-bold text-center uppercase"
					>
						<img
							src={`images/${specialty.photo}`}
							alt="physician"
							className="physician-img w-36"
						/>
						<p>{specialty.specialty}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SpecialtyList;
