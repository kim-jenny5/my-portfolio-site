import { useImageLoader } from '../utils/useImageLoader';
import WindowWrapper from '../components/WindowWrapper';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { S3_BASE_URL } from '../utils/constants';

export default function Home() {
  const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

  return (
    <>
      <div className='col-span-full col-start-1 row-span-6 row-start-5 tablet:row-span-7 tabletLandscape:col-span-8 tabletLandscape:col-start-5 tabletLandscape:row-span-full tabletLandscape:row-start-1'>
        <WindowWrapper>
          {renderPlaceholder('home-profile')}
          <img
            src={`${S3_BASE_URL}/profile/home.png`}
            alt='woman smiling outside'
            className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-500 ${
              isLoading('home-profile') ? 'opacity-0' : 'opacity-100'
            }`}
            loading='lazy'
            onLoad={() => handleImageLoad('home-profile')}
          />
        </WindowWrapper>
      </div>
      <div className='col-span-full col-start-1 row-span-4 row-start-1 flex flex-col justify-end tabletLandscape:col-span-4 tabletLandscape:row-start-4'>
        <div className='text-2xl font-bold'>Hi, I'm Jenny</div>
        <div>frontend engineer / nyc 🗽</div>
      </div>
      <SpotifyPlayer style='hidden tabletLandscape:block tabletLandscape:row-start-8 tabletLandscape:row-span-4 tabletLandscape:col-start-1 tabletLandscape:col-span-4' />
    </>
  );
}
