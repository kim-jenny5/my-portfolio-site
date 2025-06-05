import { useState } from 'react';
// import Modal from 'react-modal';
import pilim from '../assets/projects/pilim.png';
import my_travelogue from '../assets/projects/my_travelogue.png';
import my_daily_journal from '../assets/projects/my_daily_journal.png';
import tableau_dambiance from '../assets/projects/tableau_dambiance.png';
import {
	ChevronUpIcon,
	ChevronDownIcon,
	ArrowTurnDownRightIcon
} from '@heroicons/react/24/solid';

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
			<div className='col-start-1 col-span-4 row-start-full ml-10'>
				<div className='rounded-md bg-gray-100 p-4'>
					<div className='space-y-4'>
						{PROJECTS.map((group) => (
							<div key={group.name}>
								<div
									onClick={() => toggleItem(group.name, setExpandedProjects)}
									className='cursor-pointer font-semibold p-2 bg-gray-200 rounded-md hover:bg-gray-300 select-none'
								>
									{group.name}
								</div>
								{expandedProjects[group.name] && (
									<div className='ml-4 mt-2 space-y-2'>
										{group.projects.map((project, idx) => (
											<div
												key={idx}
												className='cursor-pointer p-2 bg-gray-100 rounded select-none'
												onClick={() =>
													project.sub
														? toggleItem(project.name, setExpandedSubProjects)
														: setSelectedProject(project)
												}
											>
												<div className='flex items-center'>
													{project.name}
													{project.sub &&
														(expandedSubProjects[project.name] ? (
															<ChevronUpIcon width={16} className='ml-1' />
														) : (
															<ChevronDownIcon width={16} className='ml-1' />
														))}
												</div>
												{project.sub && expandedSubProjects[project.name] && (
													<ul className='list-none text-sm text-gray-700'>
														{project.sub.map((subProject, idx) => (
															<li
																key={idx}
																className='flex items-start gap-x-1 select-none'
																onClick={(e) => {
																	e.stopPropagation();
																	setSelectedProject(subProject);
																}}
															>
																<ArrowTurnDownRightIcon width={16} />
																{subProject.name}
															</li>
														))}
													</ul>
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
			<div className='col-start-5 col-span-full row-span-full border border-black'>
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
						Select a project to view details
					</p>
				)}
			</div>
		</>
	);
}
