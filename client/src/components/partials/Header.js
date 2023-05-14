import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-indigo-950 ">
			<NavLink
				to="/covid"
				className="covid-alert flex flex-wrap justify-center align-center text-center text-xl underline bg-gray-200"
			>
				<p className="covid-toggle">COVID-19 Alert: </p>
				<p>
					Important information for patients and families regarding
					COVID-19 and vaccines.
				</p>
			</NavLink>
			<div className="header-content w-10/12 mx-auto pt-6">
				<div className="logo-row flex flex-wrap text-center my-6 mx-0">
					<NavLink to="/">
						<img
							src="/images/hospital-logo.png"
							alt="hospital-logo"
							className="img hospital-img"
							style={{ height: '75px' }}
						/>
					</NavLink>

					<NavLink to="/">
						<h1 className="brand-logo pl-4 my-0 px-4 text-5xl uppercase underline text-gray-200 ">
							General Hospital
						</h1>
					</NavLink>
				</div>

				<div className="nav-bar flex flex-wrap justify-evenly p-3 uppercase font-bold text-gray-200 bg-indigo-900 rounded-t-lg">
					<NavLink to="/physicians" className="nav-item">
						Physicians
					</NavLink>

					<NavLink to="/covid" className="nav-item py-0 px-3">
						COVID
					</NavLink>

					<NavLink to="/appointment" className="nav-item  py-0 px-3">
						Appointments
					</NavLink>
					<NavLink to="/contact-us" className="nav-item  py-0 px-3">
						Contact
					</NavLink>
					<NavLink to="/physicians" className="nav-item  py-0 px-3">
						Find a Doctor
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default Header;
