import React from 'react';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={
				// 'uppercase text-xs text-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0'
				'flex items-center justify-between text-xs h-12 px-3'
			}
		>
			<div className='flex gap-x-1 items-center text-gray-500'>
				&gt;
				<a href='/'>home</a>
			</div>
			<div className='uppercase'>© {currentYear} Jenny Kim</div>
		</footer>
	);
}
