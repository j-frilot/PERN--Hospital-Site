import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AppointmentForm from '../partials/AppointmentForm';

const Doctor = () => {
	const [doctorInfo, setDoctorInfo] = useState({});

	const { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:4000/api/physicians/${id}`)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setDoctorInfo(response);
			});
	}, [id]);

	return (
		<main className="w-10/12 mx-auto">
			<div className="doctor-top-row">
				<div className="doctor-top-row-heading flex justify-center text-center capitalize">
					<h2 className="text-2xl font-bold">
						Dr. {doctorInfo.first_name} {doctorInfo.last_name}{' '}
						{doctorInfo.suffix}
					</h2>
				</div>
				<div className="doctor-top-row-info flex flex-wrap justify-evenly align-center py-4 px-0 capitalize">
					<div className="doctor-top-row-info-column-left">
						<img
							src={`/images/${doctorInfo.photo}`}
							alt="physician"
							className="physician-img"
							style={{ 'max-width': '200px' }}
						/>
					</div>
					<div className="doctor-top-row-info-column-right">
						<div className="top-row-info-item flex justify-between">
							<h3 className="text-xl">Specialty:</h3>
							<h3 className="text-xl">{doctorInfo.specialty}</h3>
						</div>
						<div className="top-row-info-item flex justify-between">
							<h3 className="text-xl">Phone:</h3>{' '}
							<h3 className="text-xl">{doctorInfo.telephone}</h3>
						</div>
						<div className="top-row-info-item flex justify-between">
							<h3 className="text-xl">Office#:</h3>{' '}
							<h3 className="text-xl">{doctorInfo.office}</h3>
						</div>
						<div className="top-row-info-item flex justify-between mb-4">
							<h3 className="text-xl">School:</h3>{' '}
							<h3 className="text-xl">{doctorInfo.education}</h3>
						</div>
						<NavLink
							to="/appointment"
							className=" top-row-infor-item py-1.5 px-5 outline-0 border-0 rounded text-gray-200 bg-indigo-950 "
						>
							Schedule An Appointment
						</NavLink>
					</div>
				</div>
			</div>
			<div className="doctor-bottom-row w-8/12 mx-auto text-center text-lg">
				<div className="doctor-bottom-row-bio">
					<h3>About Dr. {doctorInfo.last_name}</h3>
					<p>{doctorInfo.info}</p>
				</div>
			</div>
			<AppointmentForm />
		</main>
	);
};

export default Doctor;
