import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		// <nav className='grid grid-cols-12 p-3 tablet:p-5 desktop:px-8 widescreen:px-0 font-poppins text-obsidian tracking-tight'>
		// <nav className='grid grid-cols-12 gap-x-3 items-center p-3 tablet:p-5 tablet:gap-x-5 desktop:px-8 desktop:gap-x-8 widescreen:px-0 font-poppins text-obsidian tracking-tight'>
		<nav className='flex justify-between items-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0 font-poppins text-obsidian tracking-tight'>
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
