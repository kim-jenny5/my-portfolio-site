import React from 'react';
// import { useIsHome } from '../hooks/useIsHome';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	// const isHome = useIsHome();

	return (
		<footer
			className={'uppercase text-xs text-center p-1.5 tablet:p-2.5 desktop:p-4'}
		>
			© {currentYear} Jenny Kim
		</footer>
	);
}
