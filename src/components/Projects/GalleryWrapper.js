import { useState } from 'react';
import { useImageLoader } from '../../utils/useImageLoader';
import { S3_BASE_URL } from '../../utils/constants';
import Sidebar from './Sidebar';

export default function GalleryWrapper({ projects }) {
	const [highlightedProject, setHighlightedProject] = useState(projects[0]);
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();
	const handleClick = (project) => setHighlightedProject(project);

	return (
		<div className='flex grow'>
			<div className='flex flex-col flex-[3]'>
				<div className='flex justify-center grow px-8 py-16 h-[200px] max-h-fit'>
					{renderPlaceholder('highlighted')}
					<div className='rounded-md border border-gray-200'>
						<img
							src={`${S3_BASE_URL}${highlightedProject.img}`}
							className={`rounded-md w-full h-full object-cover transition-opacity duration-500 ${
								isLoading('highlighted') ? 'opacity-0' : 'opacity-100'
							}`}
							loading='lazy'
							onLoad={() => handleImageLoad('highlighted')}
						/>
					</div>
				</div>
				<div className='flex w-full h-1/4 items-end overflow-x-auto px-4 py-2'>
					<div className='flex'>
						{projects.map((project, index) => (
							<div
								tabIndex={0}
								key={index}
								className='py-8 px-2 cursor-pointer rounded focus:bg-gray-200 focus:outline-none shrink-0'
								onClick={() => handleClick(project)}
							>
								{renderPlaceholder(`project-${index}`)}
								<img
									src={`${S3_BASE_URL}${project.img}`}
									className={`w-[150px] h-[100px] border border-gray-200 object-cover transition-opacity duration-500 ${
										isLoading('highlighted') ? 'opacity-0' : 'opacity-100'
									}`}
									loading='lazy'
									onLoad={() => handleImageLoad(`project-${index}`)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<Sidebar project={highlightedProject} />
		</div>
	);
}
