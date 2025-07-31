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
      <div className='relative flex flex-[3] flex-col'>
        {highlightedProject.inConstruction && (
          <div className='absolute w-full bg-orange-100 px-4 py-2 text-center text-sm text-orange-600'>
            🚧 This project is still under construction. Check out the progress on GitHub. 🚧
          </div>
        )}
        <div className='flex h-[200px] max-h-fit grow justify-center px-8 py-16'>
          {renderPlaceholder('highlighted')}
          <div className='rounded-md border border-gray-200'>
            <img
              src={`${S3_BASE_URL}${highlightedProject.img}`}
              className={`h-full w-full rounded-md object-cover transition-opacity duration-500 ${
                isLoading('highlighted') ? 'opacity-0' : 'opacity-100'
              }`}
              loading='lazy'
              onLoad={() => handleImageLoad('highlighted')}
            />
          </div>
        </div>
        <div className='flex h-1/4 w-full items-end overflow-x-auto px-4 py-2'>
          <div className='flex'>
            {projects.map((project, index) => (
              <div
                tabIndex={0}
                key={index}
                className='shrink-0 cursor-pointer rounded px-2 py-8 focus:bg-gray-200 focus:outline-none'
                onClick={() => handleClick(project)}
              >
                {renderPlaceholder(`project-${index}`)}
                <img
                  src={`${S3_BASE_URL}${project.img}`}
                  className={`h-[100px] w-[150px] border border-gray-200 object-cover transition-opacity duration-500 ${
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
