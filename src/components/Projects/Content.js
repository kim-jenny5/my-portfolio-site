import Professional from './Professional';
import GalleryWrapper from './GalleryWrapper';
import macOSFolder from '../../assets/images/macos_folder.png';
import PROJECTS from './Data';

export default function Content({ selectProject, selectedProject }) {
	const renderSelectedProject = () => {
		if (!selectedProject) return null;

		switch (selectedProject.name) {
			case 'BDG Media':
				return <Professional projects={selectedProject.projects} />;
			case 'Personal':
			case 'Student':
				return <GalleryWrapper projects={selectedProject.projects} />;
			default:
				return null;
		}
	};

	return (
		<>
			{selectedProject ? (
				renderSelectedProject()
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
									className='inline-block text-center cursor-pointer group'
									onClick={() => selectProject(project)}
								>
									<img
										src={macOSFolder}
										className='w-[100px] p-1 rounded-md group-active:bg-gray-200'
									/>
									<div className='text-sm inline-block px-1 rounded group-active:bg-blue-600 group-active:text-white'>
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
