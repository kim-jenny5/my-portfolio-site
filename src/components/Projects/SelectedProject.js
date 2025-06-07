import { useState } from 'react';
import Details from './Details';

export default function SelectedProject({ projects }) {
	const [highlightedProject, setHighlightedProject] = useState(projects[0]);

	const handleClick = (project) => {
		console.log(project);
		setHighlightedProject(project);
	};

	return (
		// <div className='grid grid-cols-3 gap-y-8 p-4'>
		// 	{projects.map((project, index) => (
		// 		<div
		// 			key={index}
		// 			tabIndex={0}
		// 			className='flex flex-col gap-y-1 justify-between items-center cursor-pointer group focus:outline-none'
		// 			onDoubleClick={handleClick}
		// 		>
		// 			<div className='px-3 py-9 rounded group-focus:bg-neutral-200'>
		// 				<div className='shadow-lg p-2 rounded'>
		// 					<img
		// 						src={project.img}
		// 						className='w-[200px] h-[120px] object-cover border border-gray-300 rounded'
		// 					/>
		// 				</div>
		// 			</div>
		// 			<div className='text-sm px-1 rounded group-focus:bg-blue-600 group-focus:text-white'>
		// 				{project.name}
		// 			</div>
		// 		</div>
		// 	))}
		// </div>

		<div className='flex grow'>
			<div className='flex flex-col flex-[3]'>
				<div className='flex justify-center grow px-8 py-16'>
					<img
						src={highlightedProject.img}
						className='rounded-md border border-gray-200'
					/>
				</div>
				<div className='flex w-full h-1/4 items-end overflow-x-auto px-4 py-2'>
					{projects.map((project, index) => (
						<div
							tabIndex={0}
							key={index}
							className='py-8 px-2 cursor-pointer rounded focus:bg-gray-200 focus:outline-none'
							onClick={() => handleClick(project)}
						>
							<img
								src={project.img}
								className='w-[160px] h-[96px] object-cover border border-gray-200'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='flex-[1] flex flex-col gap-y-6 border-l border-gray-300 px-3 py-6'>
				<div className='flex gap-x-3 items-center'>
					<div className='shrink-0 shadow-md p-1'>
						<img
							src={highlightedProject.img}
							className='w-[75px] object-cover border border-gray-300'
						/>
					</div>
					<div className='font-medium tracking-wide text-wrap leading-[1.3]'>
						{highlightedProject.name}
					</div>
				</div>
				<div className='flex flex-col gap-y-1 text-sm tracking-wide'>
					<div className='flex justify-between'>
						<div className='font-bold'>Information</div>
						<div className='text-orion text-xs'>Show Less</div>
					</div>
					<Details project={highlightedProject} />
				</div>
			</div>
		</div>
	);
}
