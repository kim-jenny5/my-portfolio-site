export default function Links({ links, active }) {
	const githubLinks = links.find((link) => link.gitHub).gitHub;
	const liveLink = links.find((link) => link.live).live;

	return (
		<div className='flex flex-col items-end gap-y-1'>
			{githubLinks.map((ghLink, idx) => (
				<a
					key={`github-${idx}`}
					href={ghLink}
					className='text-blue-600 underline block'
					target='_blank'
					rel='noopener noreferrer'
				>
					{githubLinks.length === 1
						? 'GitHub'
						: idx === 0
						? 'Frontend GitHub'
						: 'Backend GitHub'}
				</a>
			))}
			<span>
				<a
					href={liveLink}
					className='text-blue-600 underline'
					target='_blank'
					rel='noopener noreferrer'
				>
					Live Site
				</a>
				<span className='italic text-gray-500'>{!active && ' (inactive)'}</span>
			</span>
		</div>
	);
}
