import React from 'react';
import ContactForm from './ContactForm';
import Inquiries from './Inquiries';

const Contact = () => {
	return (
		<main className="contact w-10/12 mx-auto grid gid-cols-2 gap-4">
			<Inquiries />
			<ContactForm />
		</main>
	);
};

export default Contact;
