import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-indigo-950">
			<section className="footer-grid grid grid-cols-4 text-center text-gray-200 text-base">
				<div className="footer-grid-item">
					<h3 className="text-2xl">Contact Us</h3>
					<ul className="contact-ul">
						<li>125 Main Street</li>
						<li>Codeville, MS 12012</li>
						<li>(555) 555-5555</li>
						<li>
							<a href="/">Directions</a>
						</li>
						<li>
							<a href="/">Other Locations</a>
						</li>
					</ul>
				</div>
				<div className="footer-grid-item">
					<h3 className="text-2xl">General Hospital</h3>
					<ul className="contact-ul">
						<li>About Us</li>
						<NavLink to="/contact-us">Contact</NavLink>
						<li>
							<NavLink to="/covid">COVID-19 Info</NavLink>
						</li>
						<li>
							<NavLink to="/physicians">
								Find A Physicians
							</NavLink>
						</li>
						<li>
							<NavLink to="/appoinemtne">
								Make an appointment
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="footer-grid-item">
					<h3 className="text-2xl">Helpful Links</h3>
					<ul className="contact-ul">
						<li>
							<a href="https://www.cdc.gov/">
								Centers for Disease Control & Intervention
							</a>
						</li>
						<li>
							<a href="https://msdh.ms.gov/">
								Mississippi Department of Health
							</a>
						</li>
						<li>
							<a href="https://coronavirus.jhu.edu/map.html">
								John Hopkins Corona Resourse Center
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-grid-item">
					<h3 className="text-2xl">Other</h3>
					<ul className="contact-ul">
						<li>Donate</li>
						<li>Subscribe To Newsletter</li>
						<li>
							<a href="/">Facebook</a>
						</li>
					</ul>
				</div>
			</section>

			<section className="copy-right w-full fixed bottom-0 bg-gray-500 opacity-70 text-center">
				Sources: CDC, Mississippi Department of Health, John Hopkins
				University
			</section>
		</footer>
	);
};

export default Footer;
