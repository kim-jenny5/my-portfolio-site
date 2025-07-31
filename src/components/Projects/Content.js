import { useEffect, useState } from 'react';
import macOSFolder from '../../assets/macos_folder.png';
import { S3_BASE_URL } from '../../utils/constants';
import GalleryWrapper from './GalleryWrapper';

export default function Content({ selectProject, selectedProject }) {
	const [projectGroups, setProjectGroups] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(`${S3_BASE_URL}/projects.json`);
				const data = await response.json();
				setProjectGroups(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error loading projects.json:', error);
				setIsLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const renderSelectedProject = () =>
		selectedProject ? (
			<GalleryWrapper projects={selectedProject.projects} />
		) : null;

	if (isLoading) return <div className='p-6'>Loading...</div>;

	return (
		<>
			{selectedProject ? (
				renderSelectedProject()
			) : (
				<div className='flex flex-col gap-y-4'>
					{projectGroups.map((group, index) => (
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
