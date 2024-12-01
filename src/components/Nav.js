import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useClickOutside } from '../utils/useClickOutside';

export default function Nav({ toggleMenu = () => {}, style: styleFromProps }) {
	const ref = useClickOutside(() => toggleMenu());
	const location = useLocation();

	useEffect(() => {
		toggleMenu();
	}, [location.pathname]);

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
