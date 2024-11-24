import React from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function Header({
	style: styleFromProps,
	toggleMenu,
	isMenuOpen
}) {
	return (
		<header
			className={`relative ${styleFromProps} flex justify-end items-center desktop:justify-center text-obsidian`}
		>
			<NavLink
				to='/'
				className='z-50 absolute -left-10 -bottom-12 -rotate-90 font-poppins font-bold text-center text-2xl text-orion underline underline-offset-2 tracking-[-.075em]'
			>
				jennykim .
			</NavLink>
			<div
				onClick={toggleMenu}
				className='rounded-full py-0.5 px-2 bg-mist italic lowercase text-sm desktop:hidden'
			>
				Menu
			</div>
			{isMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
		</header>
	);
}
