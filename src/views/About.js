import { useImageLoader } from '../utils/useImageLoader';
import profile from '../assets/images/about_profile.jpg';
import cat from '../assets/images/cat.jpg';

export default function About() {
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

	return (
		<>
			<div className='flex flex-col justify-center gap-y-4 row-start-4 row-span-6 col-span-full tablet:row-start-5 tablet:row-span-4 tabletLandscape:justify-end tabletLandscape:row-start-2 tabletLandscape:row-span-7 tabletLandscape:col-start-6 tabletLandscape:col-span-7'>
				<div>
					I'm a fullstack engineer, with a focus in frontend, based in New York
					City. With an interest and tact for design, I have a passion for
					creating and maintaining aesthetic UIs for an enhanced, pleasing
					experience. In my free time, I love to explore the city and its
					numerous "hidden gems" with my friends, crochet, and watch TV/movies
					as I cuddle with my cat, Kiyo&ndash;the cutest cat alive, objectively.
				</div>
				<div>
					<div className='uppercase font-bold text-sm tracking-wide'>
						Frontend
					</div>
					<div>
						HTML / CSS / JavaScript / TypeScript / React / Redux / Hotwire
						Stimulus
					</div>
				</div>
				<div>
					<div className='uppercase font-bold text-sm tracking-wide'>
						Backend
					</div>
					<div>Ruby on Rails / PostgreSQL / SQLite</div>
				</div>
				<div>
					<div className='uppercase font-bold text-sm tracking-wide'>
						Design
					</div>
					<div>
						Tailwind CSS / styled-components / Bootstrap / Material UI / Figma
					</div>
				</div>
			</div>
			<div className='relative w-full h-full overflow-hidden rounded-md row-start-1 row-span-3 col-start-4 col-span-full tablet:row-span-4 tablet:col-start-6 tabletLandscape:row-start-3 tabletLandscape:row-span-5 tabletLandscape:col-start-2 tabletLandscape:col-span-4'>
				{renderPlaceholder('about-profile')}
				<img
					src={profile}
					alt='woman smiling in front of a green wall'
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						isLoading('about-profile') ? 'opacity-0' : 'opacity-100'
					}`}
					loading='lazy'
					onLoad={() => handleImageLoad('about-profile')}
				/>
			</div>
			<div className='relative w-full h-full overflow-hidden rounded-md row-start-10 row-span-3 col-span-full tablet:row-start-9 tablet:row-span-4 tabletLandscape:row-start-9 tabletLandscape:row-span-4 tabletLandscape:col-start-8 tabletLandscape:col-span-4 desktop:-mt-6'>
				{renderPlaceholder('cat')}
				<img
					src={cat}
					alt='cute cat looking up'
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						isLoading('cat') ? 'opacity-0' : 'opacity-100'
					}`}
					loading='lazy'
					onLoad={() => handleImageLoad('cat')}
				/>
			</div>
		</>
	);
}
