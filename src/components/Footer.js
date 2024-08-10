import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
	const location = useLocation();
	const pathNameMap = {
		'/': 'home',
		'/about': 'about',
		'/contact': 'contact'
	};
	const currentPathName = pathNameMap[location.pathname] || 'home';
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={
				'flex items-center justify-between text-xs h-12 p-3 tablet:p-5 desktop:px-8 widescreen:px-0'
			}
		>
			<div className='flex gap-x-1 items-center text-gray-500'>
				&gt; <a href={location.pathname}>{currentPathName}</a>
			</div>
			<div className='uppercase'>© {currentYear} Jenny Kim</div>
		</footer>
	);
}
