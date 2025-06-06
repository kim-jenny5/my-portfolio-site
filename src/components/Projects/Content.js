import macOSFolder from '../../assets/images/macos_folder.png';
import pilim from '../../assets/projects/pilim.png';
import my_travelogue from '../../assets/projects/my_travelogue.png';
import my_daily_journal from '../../assets/projects/my_daily_journal.png';
import tableau_dambiance from '../../assets/projects/tableau_dambiance.png';

const PROJECTS = [
	{
		year: '2022-2025',
		name: 'BDG Media',
		projects: [
			{ name: 'Email Newsletters', sub: [{ name: 'Dark Mode' }] },
			{ name: 'TZR' },
			{ name: 'Scary Mommy' }
		]
	},
	{
		year: '2021',
		name: 'Student',
		projects: [
			{ name: 'my travelogue', img: my_travelogue },
			{ name: "Tableau d'Ambiance", img: tableau_dambiance },
			{ name: 'Pilim', img: pilim },
			{ name: 'My Daily Journal', img: my_daily_journal }
		]
	}
];

export default function Content({ selectProject, selectedProject }) {
	return (
		<>
			{selectedProject ? (
				<div>Selected project here</div>
			) : (
				<div className='flex flex-col gap-y-4'>
					{PROJECTS.map((project, index) => (
						<div key={index}>
							<div className='flex justify-between items-center px-6 py-2 text-gray-500'>
								<span className='font-medium tracking-wide'>
									{project.year}
								</span>
								<span className='font-light text-xs'>Show Less</span>
							</div>
							<div className='border-t border-gray-200 px-6 py-2 select-none'>
								<div
									tabIndex={0}
									className='inline-block text-center cursor-pointer group focus:outline-none'
									onDoubleClick={() => selectProject(project)}
								>
									<img
										src={macOSFolder}
										width={75}
										className='p-1 rounded-md group-focus:bg-gray-200'
									/>
									<div className='text-sm inline-block px-1 rounded group-focus:bg-blue-600 group-focus:text-white'>
										{project.name}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
}
