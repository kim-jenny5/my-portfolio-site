import React from 'react';

export default function FooterNew() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='uppercase font-xs text-center p-4 text-orion'>
			© {currentYear} Jenny Kim
		</footer>
	);
}
