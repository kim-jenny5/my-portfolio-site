import React from 'react';
import { useIsHome } from '../hooks/useIsHome';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const isHome = useIsHome();

	return (
		<footer
			className={`uppercase text-xs text-center p-4 ${
				isHome ? 'text-obsidian' : 'text-orion'
			}`}
		>
			© {currentYear} Jenny Kim
		</footer>
	);
}
