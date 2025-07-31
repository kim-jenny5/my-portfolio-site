import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { S3_BASE_URL } from '../../utils/constants';
import Details from './Details';

export default function Sidebar({ project }) {
  const [showDetails, setShowDetails] = useState(true);

  const handleClick = () => setShowDetails((prev) => !prev);

  return (
    <div className='flex flex-[1] flex-col justify-between border-l border-gray-300 px-3 py-6'>
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-3'>
          <div className='shrink-0 p-1 shadow-md'>
            <img
              src={`${S3_BASE_URL}${project.img}`}
              className='w-[75px] border border-gray-300 object-cover'
            />
          </div>
          <div className='text-wrap font-medium leading-[1.3] tracking-wide'>{project.name}</div>
        </div>
        <div className='flex flex-col gap-y-1 text-sm tracking-wide'>
          <div className='flex justify-between'>
            <div className='font-bold'>Information</div>
            <button onClick={handleClick} className='text-xs text-orion'>
              {showDetails ? 'Show Less' : 'Show More'}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.div
                key='details'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='overflow-hidden'
              >
                <Details project={project} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {!project.active && (
        <div className='text-end text-xs italic text-gray-500'>
          * some features may not be working
        </div>
      )}
    </div>
  );
}
