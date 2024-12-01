import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

export default function Header({
	style: styleFromProps,
	toggleMenu,
	isMenuOpen,
	isDesktop
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
			{!isDesktop && (
				<>
					<div
						onClick={toggleMenu}
						className={`relative z-50 rounded-full py-0.5 px-2 bg-mist italic font-poppins lowercase text-sm desktop:hidden ${
							isMenuOpen ? 'pointer-events-none' : ''
						}`}
					>
						Menu
					</div>
					<Nav
						toggleMenu={toggleMenu}
						style={`${
							isMenuOpen ? 'opacity-100 translate-y-1/3' : 'opacity-0'
						} z-50 absolute top-0 right-0 bg-mist w-1/2 h-fit flex flex-col gap-y-1 items-end font-poppins text-sm shadow-lg p-4 transition duration-700 ease-in-out`}
					/>
				</>
			)}
		</header>
	);
}
