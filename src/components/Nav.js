import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
	return (
		<div className='row-start-1 col-start-9 col-span-4 flex flex-col justify-start items-end'>
			<NavLink to='/'>
				{({ isActive }) => (
					<div className='flex items-center'>
						{isActive && (
							<span className='inline-block w-1.5 h-1.5 bg-black rounded-full mr-1.5'></span>
						)}
						home
					</div>
				)}
			</NavLink>
			<NavLink to='/about'>
				{({ isActive }) => (
					<div className='flex items-center'>
						{isActive && (
							<span className='inline-block w-1.5 h-1.5 bg-black rounded-full mr-1.5'></span>
						)}
						about
					</div>
				)}
			</NavLink>
			<NavLink to='/contact'>
				{({ isActive }) => (
					<div className='flex items-center'>
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
