import React from 'react';
import { NavLink } from 'react-router-dom';
import { useClickOutside } from '../utils/useClickOutside';

export default function Nav({
	toggleMenu = () => {},
	isMenuOpen,
	style: styleFromProps
}) {
	const ref = useClickOutside(() => toggleMenu(), isMenuOpen);

	return (
		<div ref={ref} className={styleFromProps}>
			<NavLink to='/' onClick={toggleMenu}>
				{({ isActive }) => (
					<div className='flex items-center hover:text-orion'>
						{isActive && (
							<span className='inline-block w-1.5 h-1.5 bg-black rounded-full mr-1.5'></span>
						)}
						home
					</div>
				)}
			</NavLink>
			<NavLink to='/about' onClick={toggleMenu}>
				{({ isActive }) => (
					<div className='flex items-center hover:text-orion'>
						{isActive && (
							<span className='inline-block w-1.5 h-1.5 bg-black rounded-full mr-1.5'></span>
						)}
						about
					</div>
				)}
			</NavLink>
			<NavLink to='/contact' onClick={toggleMenu}>
				{({ isActive }) => (
					<div className='flex items-center hover:text-orion'>
						{isActive && (
							<span className='inline-block w-1.5 h-1.5 bg-black rounded-full mr-1.5'></span>
						)}
						contact
					</div>
				)}
			</NavLink>
		</div>
	);
}
