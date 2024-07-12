import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
	return (
		<div>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
		</div>
	);
}
