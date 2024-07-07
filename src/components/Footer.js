import React from 'react';
// import { useIsHome } from '../hooks/useIsHome';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	// const isHome = useIsHome();

	return (
		<footer
			className={
				'uppercase text-xs text-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0'
			}
		>
			© {currentYear} Jenny Kim
		</footer>
	);
}
