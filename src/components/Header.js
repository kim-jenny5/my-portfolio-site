import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ className }) {
	return (
		<nav
			className={`${className} flex justify-between items-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0 font-poppins text-obsidian tracking-tight`}
		>
			<NavLink
				to='/'
				className='uppercase text-xl tablet:text-2xl desktop:text-3xl col-start-1 col-span-5'
			>
				Jenny Kim
			</NavLink>
			{/* <div className='text-xs'>jennykimdev@gmail.com</div> */}
		</nav>
	);
}
