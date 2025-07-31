import GalleryWrapper from './GalleryWrapper';
import macOSFolder from '../../assets/macos_folder.png';
import projects from '../../data/projects.json';

export default function Content({ selectProject, selectedProject }) {
	const renderSelectedProject = () =>
		selectedProject ? (
			<GalleryWrapper projects={selectedProject.projects} />
		) : null;

	return (
		<>
			{selectedProject ? (
				renderSelectedProject()
			) : (
				<div className='flex flex-col gap-y-4'>
					{projects.map((group, index) => (
						<div key={index}>
							<div className='flex justify-between items-center px-6 py-2 text-gray-500'>
								<span className='font-medium tracking-wide'>{group.label}</span>
								<span className='font-light text-xs'>Show Less</span>
							</div>
							<div className='border-t border-gray-200 px-6 py-2 select-none flex gap-x-4'>
								{group.projects.map((subgroup, i) => (
									<div
										key={i}
										tabIndex={0}
										className='text-center cursor-pointer group'
										onClick={() => selectProject(subgroup)}
									>
										<img
											src={macOSFolder}
											className='w-[100px] p-1 rounded-md group-active:bg-gray-200'
										/>
										<div className='text-sm inline-block px-1 rounded group-active:bg-blue-600 group-active:text-white'>
											{subgroup.name}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
}
