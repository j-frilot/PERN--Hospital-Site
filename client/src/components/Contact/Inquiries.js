import React from 'react';

const Inquiries = () => {
	return (
		<section className="module inquiries my-8 p-6 text-indigo-950 bg-gray-200 shadow-md">
			<div className="inquiries-list-container">
				<h1 className="inquiries-heading">Common Inquiries</h1>
				<ul className="inquiries-list">
					<li className="py-6 px-0 font-bold border-b-2 border-indigo-950">
						<p>Covid-19 Visitation Changes</p>
					</li>
					<li className="py-6 px-0 font-bold border-b-2 border-indigo-950">
						<p>Payments and Balances</p>
					</li>
					<li className="py-6 px-0 font-bold border-b-2 border-indigo-950">
						<p> Donate To General</p>
					</li>
					<li className="py-6 px-0 font-bold border-b-2 border-indigo-950">
						<p>Patient Account Access</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Inquiries;
