import { useState, useEffect } from 'react';
import pilim from '../assets/projects/pilim.png';
import my_travelogue from '../assets/projects/my_travelogue.png';
import my_daily_journal from '../assets/projects/my_daily_journal.png';
import tableau_dambiance from '../assets/projects/tableau_dambiance.png';
// import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ListBulletIcon,
	ChevronUpDownIcon,
	Squares2X2Icon,
	ChevronDownIcon,
	ArrowUpOnSquareIcon,
	TagIcon,
	EllipsisHorizontalCircleIcon,
	MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import macOSFolder from '../assets/images/macos_folder.png';

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
const DEFAULT_TOP_BAR_TEXT = 'Projects';

export default function Projects() {
	// const [expandedProjects, setExpandedProjects] = useState({});
	// const [expandedSubProjects, setExpandedSubProjects] = useState({});
	// const [selectedProject, setSelectedProject] = useState(null);

	// const toggleItem = (name, fn) => {
	// 	fn((prev) => ({
	// 		...prev,
	// 		[name]: !prev[name]
	// 	}));
	// };
	const [topBarText, setTopBarText] = useState(DEFAULT_TOP_BAR_TEXT);
	const [selectedProject, setSelectedProject] = useState();
	const [history, setHistory] = useState([]);
	const [future, setFuture] = useState([]);

	const hasHistory = history?.length > 0;
	const hasFuture = future?.length > 0;

	const selectProject = (project) => {
		setSelectedProject(project);
		setTopBarText(project.name);
		setHistory((prev) => [...prev, selectedProject]);
		setFuture([]);
	};

	const handleBack = () => {
		if (history.length > 0) {
			const previous = history[history.length - 1];
			const newHistory = history.slice(0, -1);

			setSelectedProject(previous);
			setTopBarText(previous?.name || DEFAULT_TOP_BAR_TEXT);
			setHistory(newHistory);
			setFuture((prev) => [selectedProject, ...prev]);
		}
	};

	const handleForward = () => {
		if (future.length > 0) {
			const next = future[0];
			const newFuture = future.slice(1);

			setSelectedProject(next);
			setTopBarText(next?.name || DEFAULT_TOP_BAR_TEXT);
			setHistory((prev) => [...prev, selectedProject]);
			setFuture(newFuture);
		}
	};

	return (
		<>
			{/* <div className='col-start-1 col-span-full row-start-1 row-span-2 tabletLandscape:col-start-1 tabletLandscape:col-span-4 tabletLandscape:row-start-full ml-14 font-poppins'>
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
			</div> */}
			<div className='row-start-1 row-span-full col-start-1 col-span-full ml-14 rounded-xl border border-gray-300 shadow-lg overflow-y-auto'>
				<div className='flex justify-between py-4 px-6 rounded-t-xl border-b border-gray-300 bg-stone-100 text-gray-600'>
					<div className='flex gap-x-2 items-center font-medium tracking-wide select-none'>
						<div
							className={`cursor-pointer rounded p-2 ${
								hasHistory && selectedProject
									? 'text-gray-600 hover:bg-gray-200'
									: 'text-gray-400 pointer-events-none'
							}`}
							onClick={handleBack}
						>
							<ChevronLeftIcon width={20} />
						</div>
						<div
							className={`cursor-pointer rounded p-2 ${
								hasFuture
									? 'text-gray-600 hover:bg-gray-200'
									: 'text-gray-400 pointer-events-none'
							}`}
							onClick={handleForward}
						>
							<ChevronRightIcon width={20} />
						</div>
						<span className='ml-2'>{topBarText}</span>
					</div>
					<div className='flex'>
						<div className='flex mr-12'>
							<ListBulletIcon width={22} />
							<ChevronUpDownIcon width={20} strokeWidth={2} />
						</div>
						<div className='flex gap-x-4'>
							<div className='flex'>
								<Squares2X2Icon width={22} />
								<ChevronDownIcon width={10} strokeWidth={4} />
							</div>
							<ArrowUpOnSquareIcon width={22} />
							<TagIcon width={22} />
							<div className='flex'>
								<EllipsisHorizontalCircleIcon width={20} />
								<ChevronDownIcon width={10} strokeWidth={4} />
							</div>
						</div>
						<MagnifyingGlassIcon width={20} className='ml-12' />
					</div>
				</div>
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
			</div>
		</>
	);
}
