import WindowWrapper from '../components/WindowWrapper';
import { useImageLoader } from '../utils/useImageLoader';
import { S3_BASE_URL } from '../utils/constants';

export default function Contact() {
  const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

  return (
    <>
      <WindowWrapper style='row-start-2 row-span-10 col-start-2 col-span-10 tablet:row-start-3 tablet:row-span-8 tablet:col-start-4 tablet:col-span-6 tabletLandscape:row-start-2 tabletLandscape:row-span-10 tabletLandscape:col-start-5 tabletLandscape:col-span-4 desktop:row-start-3 desktop:row-span-8'>
        <div className='flex h-full w-full -translate-y-[9%] flex-col overflow-hidden'>
          <div className='relative h-full w-full'>
            {renderPlaceholder('contact-profile')}
            <img
              src={`${S3_BASE_URL}/profile/contact.png`}
              className={`absolute left-0 top-0 h-full w-full object-cover object-[0%_25%] brightness-125 transition-opacity duration-500 ${
                isLoading('contact-profile') ? 'opacity-0' : 'opacity-100'
              } brightness-[0.95]`}
              onLoad={() => handleImageLoad('contact-profile')}
            />
          </div>
          <div className='flex h-[150px] w-full shrink-0 flex-col justify-between p-2 pb-3 pt-4 tablet:p-4 tablet:pb-5 tablet:pt-6'>
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
                href='/resume.pdf'
                download='Jenny Kim Resume.pdf'
                className='rounded-md px-2 py-1 hover:bg-gray-100 hover:font-medium active:text-orion'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </WindowWrapper>
    </>
  );
}
