import { useImageLoader } from '../utils/useImageLoader';
import PictureWrapper from '../components/PictureWrapper';
import profile from '../assets/images/profile.jpg';

export default function Home() {
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

	return (
		<>
			<div className='row-start-5 row-span-6 col-start-1 col-span-full tablet:row-span-7 tabletLandscape:col-start-5 tabletLandscape:col-span-8 tabletLandscape:row-start-1 tabletLandscape:row-span-full'>
				<PictureWrapper>
					{renderPlaceholder('profile')}
					<img
						src={profile}
						alt='woman smiling outside'
						className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
							isLoading('profile') ? 'opacity-0' : 'opacity-100'
						}`}
						loading='lazy'
						onLoad={() => handleImageLoad('profile')}
					/>
				</PictureWrapper>
			</div>
			<div className='flex flex-col justify-end row-start-1 row-span-4 col-start-1 col-span-full tabletLandscape:row-start-4 tabletLandscape:col-span-4'>
				<div className='font-bold text-2xl'>Hi, I'm Jenny</div>
				<div>frontend engineer / nyc 🗽</div>
			</div>
		</>
	);
}
