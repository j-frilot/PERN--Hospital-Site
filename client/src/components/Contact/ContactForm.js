import React, { useState } from 'react';

const ContactForm = () => {
	const [person_first_name, setPersonFirstName] = useState('');
	const [person_last_name, setPersonLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const displayInfo = (event) => {
		event.preventDefault();

		console.log(person_first_name, person_last_name, email, message);

		fetch('http://localhost:4000/api/covid/send-message/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				person_first_name,
				person_last_name,
				email,
				message,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<section>
			<div className="module form-container">
				<form>
					<fieldset>
						<legend>
							<h1>Send Us A Message</h1>
						</legend>
						<input
							type="text"
							name="person_first_name"
							required
							placeholder="First Name"
							onChange={(event) => {
								setPersonFirstName(event.target.value);
							}}
						/>
						<input
							type="text"
							name="person_last_name"
							placeholder="Last Name"
							onChange={(event) => {
								setPersonLastName(event.target.value);
							}}
						/>

						<input
							type="email"
							name="email"
							pattern=".+@globex.com"
							require
							placeholder="Email*"
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>

						<textarea
							name="message"
							type="text"
							placeholder="Message To General"
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						></textarea>
					</fieldset>

					<input type="submit" value="Send" onClick={displayInfo} />
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
