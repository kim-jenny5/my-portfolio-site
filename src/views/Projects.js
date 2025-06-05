import { useState } from 'react';
import pilim from '../assets/projects/pilim.png';
import my_travelogue from '../assets/projects/my_travelogue.png';
import my_daily_journal from '../assets/projects/my_daily_journal.png';
import tableau_dambiance from '../assets/projects/tableau_dambiance.png';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const PROJECTS = [
	{
		name: 'BDG Media',
		projects: [
			{ name: 'Email Newsletters', sub: [{ name: 'Dark Mode' }] },
			{ name: 'TZR' },
			{ name: 'Scary Mommy' }
		]
	},
	{
		name: 'Student',
		projects: [
			{ name: 'my travelogue', img: my_travelogue },
			{ name: "Tableau d'Ambiance", img: tableau_dambiance },
			{ name: 'Pilim', img: pilim },
			{ name: 'My Daily Journal', img: my_daily_journal }
		]
	}
];

export default function Projects() {
	const [expandedProjects, setExpandedProjects] = useState({});
	const [expandedSubProjects, setExpandedSubProjects] = useState({});
	const [selectedProject, setSelectedProject] = useState(null);

	const toggleItem = (name, fn) => {
		fn((prev) => ({
			...prev,
			[name]: !prev[name]
		}));
	};

	return (
		<>
			<div className='col-start-1 col-span-full row-start-1 row-span-2 tabletLandscape:col-start-1 tabletLandscape:col-span-4 tabletLandscape:row-start-full ml-14 font-poppins'>
				<div className='rounded-md bg-gray-100 p-4'>
					<div className='space-y-4'>
						{PROJECTS.map((group) => (
							<div key={group.name} className='lowercase select-none'>
								<div
									onClick={() => toggleItem(group.name, setExpandedProjects)}
									className='flex items-center cursor-pointer hover:text-orion'
								>
									{group.name}
									{expandedProjects[group.name] ? (
										<ChevronUpIcon width={16} className='ml-1' />
									) : (
										<ChevronDownIcon width={16} className='ml-1' />
									)}
								</div>
								{expandedProjects[group.name] && (
									<div className='ml-4 mt-2 space-y-2'>
										{group.projects.map((project, idx) => (
											<div
												key={idx}
												className='cursor-pointer'
												onClick={() =>
													project.sub
														? toggleItem(project.name, setExpandedSubProjects)
														: setSelectedProject(project)
												}
											>
												<div className='relative flex items-center hover:text-orion'>
													{selectedProject === project && (
														<span className='absolute -left-3 w-1.5 h-1.5 bg-black rounded-full'></span>
													)}
													{project.name}
													{project.sub &&
														(expandedSubProjects[project.name] ? (
															<ChevronUpIcon width={16} className='ml-1' />
														) : (
															<ChevronDownIcon width={16} className='ml-1' />
														))}
												</div>
												{project.sub && expandedSubProjects[project.name] && (
													<div className='text-sm text-gray-700 ml-4 mt-2 space-y-2'>
														{project.sub.map((subProject, idx) => (
															<div
																key={idx}
																className='cursor-pointer hover:text-orion'
																onClick={(e) => {
																	e.stopPropagation();
																	setSelectedProject(subProject);
																}}
															>
																<div className='relative flex items-center'>
																	{selectedProject === subProject && (
																		<span className='absolute -left-3 w-1.5 h-1.5 bg-black rounded-full'></span>
																	)}
																	{subProject.name}
																</div>
															</div>
														))}
													</div>
												)}
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='col-start-1 col-span-full row-start-3 row-span-full tabletLandscape:col-start-5 tabletLandscape:col-span-full tabletLandscape:row-span-full'>
				{selectedProject ? (
					<div className='p-4'>
						<h2 className='text-xl font-semibold'>{selectedProject.name}</h2>
						{selectedProject.img && (
							<img
								src={selectedProject.img}
								alt={selectedProject.name}
								className='mt-4 max-w-md rounded'
							/>
						)}
					</div>
				) : (
					<p className='p-4 text-gray-500 italic'>
						👈🏻 Select a project to view its details!
					</p>
				)}
			</div>
		</>
	);
}
