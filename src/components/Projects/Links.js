export default function Links({ links, active }) {
	return (
		<div className='flex flex-col items-end gap-y-1'>
			{links.map((link, index) => {
				if (typeof link === 'object') {
					if (link.gitHub) {
						const gitHubLinks = Array.isArray(link.gitHub)
							? link.gitHub
							: [link.gitHub];

						return gitHubLinks.map((ghLink, idx) => (
							<a
								key={`github-${index}-${idx}`}
								href={ghLink}
								className='text-blue-600 underline block'
								target='_blank'
								rel='noopener noreferrer'
							>
								{gitHubLinks.length === 1
									? 'GitHub'
									: idx === 0
									? 'Frontend GitHub'
									: 'Backend GitHub'}
							</a>
						));
					}

					if (link.live) {
						return (
							<span>
								<a
									key={`live-${index}`}
									href={link.live}
									className='text-blue-600 underline'
									target='_blank'
									rel='noopener noreferrer'
								>
									Live Site
								</a>
								<span className='italic text-gray-500'>
									{!active && ' (inactive)'}
								</span>
							</span>
						);
					}
				}

				return null;
			})}
		</div>
	);
}
