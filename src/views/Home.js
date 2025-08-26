import { useImageLoader } from '../utils/useImageLoader';
import WindowWrapper from '../components/WindowWrapper';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { S3_BASE_URL } from '../utils/constants';

export default function Home() {
  const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

  return (
    <>
      <div className='col-span-full col-start-1 row-span-6 row-start-3 tablet:col-span-8 tablet:col-start-4 tabletLandscape:col-span-7 tabletLandscape:col-start-6 tabletLandscape:row-start-1 tabletLandscape:row-end-13'>
        <WindowWrapper style='h-full'>
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
      <div className='col-span-full col-start-1 row-span-4 row-start-9 flex flex-col tablet:col-start-2 tabletLandscape:col-start-1 tabletLandscape:col-end-6 tabletLandscape:row-span-3 tabletLandscape:row-start-6 tabletLandscape:justify-end'>
        <div className='text-5xl font-bold tablet:text-6xl'>Hi, I'm Jenny</div>
        <div>frontend engineer / nyc 🗽</div>
      </div>
      <SpotifyPlayer style='hidden tabletLandscape:block tabletLandscape:row-start-9 tabletLandscape:content-end tabletLandscape:row-span-4 tabletLandscape:col-start-1 tabletLandscape:col-span-5' />
    </>
  );
}
