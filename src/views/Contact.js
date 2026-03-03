import WindowWrapper from '../components/WindowWrapper';
import { useImageLoader } from '../utils/useImageLoader';
import { S3_BASE_URL } from '../utils/constants';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

  return (
    <>
      <WindowWrapper style='h-fit row-start-2 row-end-12 col-start-1 col-end-13 tablet:row-start-3 tablet:row-span-8 tablet:col-start-4 tablet:col-span-6 tabletLandscape:row-start-2 tabletLandscape:row-span-10 tabletLandscape:col-start-5 tabletLandscape:col-span-4 widescreen:row-end-13 widescreen:translate-y-[5%]'>
        <div className='flex flex-col'>
          <div className='relative aspect-square w-full overflow-hidden'>
            {renderPlaceholder('contact-profile')}
            <img
              src={`${S3_BASE_URL}/profile/contact.png`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                isLoading('contact-profile') ? 'opacity-0' : 'opacity-100'
              } brightness-[0.95]`}
              onLoad={() => handleImageLoad('contact-profile')}
            />
          </div>
          <div className='flex w-full shrink-0 flex-col justify-between gap-y-5 p-2 pb-3 pt-4 tablet:p-4 tablet:pb-5 tablet:pt-6'>
            <div className='px-2'>
              <div className='text-2xl font-bold uppercase leading-[1.2] tracking-tight'>
                Jenny Kim
              </div>
              <a
                href='mailto:jennykimdev@gmail.com'
                className='text-blue-500 underline hover:text-orion'
              >
                jennykimdev@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-x-1 text-sm uppercase tracking-wide'>
              <a
                href='https://www.linkedin.com/in/kim-jenny5/'
                target='_blank'
                className='rounded-md px-2 py-1 hover:bg-gray-100 hover:font-medium active:text-orion'
              >
                LinkedIn
              </a>
              <span className='inline-block h-1 w-1 rounded-full bg-black'></span>
              <a
                href='https://github.com/kim-jenny5'
                target='_blank'
                className='rounded-md px-2 py-1 hover:bg-gray-100 hover:font-medium active:text-orion'
              >
                GitHub
              </a>
              <span className='inline-block h-1 w-1 rounded-full bg-black'></span>
              <a
                href={`${S3_BASE_URL}/resume.pdf`}
                className='flex gap-x-1 rounded-md px-2 py-1 hover:bg-gray-100 hover:font-medium active:text-orion'
              >
                Resume
                <LockClosedIcon width={15} />
              </a>
            </div>
          </div>
        </div>
      </WindowWrapper>
    </>
  );
}
