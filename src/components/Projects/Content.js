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
    selectedProject ? <GalleryWrapper projects={selectedProject.projects} /> : null;

  if (isLoading) return <div className='p-6'>Loading...</div>;

  return (
    <>
      {selectedProject ? (
        renderSelectedProject()
      ) : (
        <div className='flex flex-col gap-y-4'>
          {projectGroups.map((group, index) => (
            <div key={index}>
              <div className='flex items-center justify-between px-6 py-2 text-gray-500'>
                <span className='font-medium tracking-wide'>{group.label}</span>
                <span className='text-xs font-light'>Show Less</span>
              </div>
              <div className='flex select-none gap-x-4 border-t border-gray-200 px-6 py-2'>
                {group.projects.map((subgroup, i) => (
                  <div
                    key={i}
                    tabIndex={0}
                    className='group cursor-pointer text-center'
                    onClick={() => selectProject(subgroup)}
                  >
                    <img
                      src={macOSFolder}
                      className='w-[100px] rounded-md p-1 group-active:bg-gray-200'
                    />
                    <div className='inline-block rounded px-1 text-sm group-active:bg-blue-600 group-active:text-white'>
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
