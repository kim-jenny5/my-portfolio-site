import React from 'react';

export default function Footer({ className }) {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={`${className} flex items-center text-xs p-3 tablet:p-5 desktop:px-8 widescreen:px-0`}
		>
			<div className='uppercase'>© {currentYear} Jenny Kim</div>
		</footer>
	);
}
