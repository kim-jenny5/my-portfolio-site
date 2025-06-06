export default function Projects({ PROJECTS, selectProject, macOSFolder }) {
	return (
		<div className='flex flex-col gap-y-4'>
			{PROJECTS.map((project, index) => (
				<div key={index}>
					<div className='flex justify-between items-center px-6 py-2 text-gray-500'>
						<span className='font-medium tracking-wide'>{project.year}</span>
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
	);
}
