import { useState } from 'react';
import Modal from 'react-modal';
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

	const toggleProject = (name) => {
		setExpandedProjects((prev) => ({
			...prev,
			[name]: !prev[name]
		}));
	};

	return (
		<>
			<div className='col-start-1 col-span-4 row-start-full ml-10'>
				<div className='rounded-md bg-gray-100 p-4'>
					{/* {PROJECTS.map((project, idx) => (
						<div
							key={idx}
							onClick={() => setSelectedProject(project)}
							className='cursor-pointer p-2 hover:bg-gray-200 rounded'
						>
							{project.name}
						</div>
					))}
					{selectedProject && (
						<div className='col-start-5 col-span-8 row-start-1 row-span-6 p-4 bg-white rounded-md'>
							<h2 className='text-lg font-bold'>{selectedProject.name}</h2>
							{selectedProject.subProjects?.length > 0 && (
								<ul className='mt-2'>
									{selectedProject.subProjects.map((sub, i) => (
										<li key={i}>{sub.name}</li>
									))}
								</ul>
							)}
						</div>
					)} */}
					<div className='space-y-4'>
						{PROJECTS.map((group) => (
							<div key={group.name}>
								<div
									onClick={() => toggleProject(group.name)}
									className='cursor-pointer font-semibold p-2 bg-gray-200 rounded-md hover:bg-gray-300'
								>
									{group.name}
								</div>

								{expandedProjects[group.name] && (
									<div className='ml-4 mt-2 space-y-2'>
										{group.projects.map((project, idx) => (
											<div
												key={idx}
												className='flex items-center p-2 bg-gray-100 rounded'
											>
												{project.name}
												{project.sub && (
													<ChevronDownIcon width={20} className='ml-1' />
												)}
												{/* {project.sub && (
													<ul className='ml-4 list-disc text-sm text-gray-700 mt-1'>
														{project.sub.map((subProject, i) => (
															<li key={i}>{subProject.name}</li>
														))}
													</ul>
												)} */}
												{/* {project.img && (
													<img
														src={project.img}
														alt={project.name}
														className='mt-2 w-full max-w-xs rounded'
													/>
												)} */}
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className='col-start-5 col-span-full row-span-full rounded-md border-2 border-gray-100 shadow-sm'></div> */}
			<div className='col-start-5 col-span-full row-span-full border border-black'></div>
		</>
	);
}
