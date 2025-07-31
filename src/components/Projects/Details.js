import Links from './Links';

export default function Details({ project }) {
	const { createdAt, active, tech, links } = project;

	const renderTech = () => (
		<div className='flex flex-col items-end gap-y-1'>
			{tech.split(', ').map((language, index) => (
				<div key={index}>{language}</div>
			))}
		</div>
	);

	const details = [
		{ label: 'Created', value: createdAt },
		{ label: 'Technologies', value: renderTech() },
		{
			label: 'Links',
			value: <Links links={links} active={active} />,
		},
	];

	return (
		<div className='flex flex-col divide-y divide-gray-300'>
			{details.map((item, index) => (
				<div
					key={index}
					className='flex justify-between items-start py-2 max-h-32 overflow-y-auto'
				>
					<div className='font-medium text-gray-400'>{item.label}</div>
					<div className='text-right'>{item.value}</div>
				</div>
			))}
		</div>
	);
}
