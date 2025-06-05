import { useImageLoader } from '../utils/useImageLoader';
import profile from '../assets/images/contact_profile.jpg';
import arrow from '../assets/images/arrow.png';

export default function Contact() {
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

	return (
		<>
			<div className='z-20 flex items-end font-bold row-start-5 row-span-2 col-start-2 col-end-13 text-3xl tablet:row-start-6 tablet:col-start-4 tablet:col-span-6 tablet:text-6xl tablet:justify-center tabletLandscape:row-start-7 tabletLandscape:col-start-5 tabletLandscape:col-span-4 tabletLandscape:items-start tabletLandscape:-mt-5'>
				Contact Me
			</div>
			<div className='relative w-full h-full overflow-hidden row-start-7 row-span-2 col-start-1 col-span-4 -mt-8 tablet:row-start-8 tablet:col-start-3 tablet:col-span-3 tabletLandscape:-mt-20 tabletLandscape:row-start-9 tabletLandscape:col-start-5 tabletLandscape:col-span-2 tabletLandscape:-ml-12'>
				{renderPlaceholder('arrow')}
				<img
					src={arrow}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						isLoading('arrow') ? 'opacity-0' : 'opacity-100'
					}`}
					onLoad={() => handleImageLoad('arrow')}
				/>
			</div>
			<div className='flex flex-col gap-y-6 row-start-7 row-span-3 col-start-5 col-span-8 -ml-2 tablet:row-start-8 tablet:col-start-6 tabletLandscape:row-start-8 tabletLandscape:row-span-4 tabletLandscape:col-start-6 tabletLandscape:col-span-full tabletLandscape:ml-8'>
				<div>
					<a
						href='mailto:jennykimdev@gmail.com'
						className='text-lg underline underline-offset-[12px] hover:text-orion tablet:text-2xl tablet:tracking-wider tabletLandscape:text-3xl'
					>
						jennykimdev@gmail.com
					</a>
				</div>
				<div className='flex flex-col gap-y-2 uppercase tablet:text-lg'>
					<div className='font-bold tracking-wide'>Other Links</div>
					<div className='flex flex-col gap-y-1 pl-1 tracking-wider'>
						<div className='flex gap-x-2'>
							🔗
							<a
								href='https://www.linkedin.com/in/kim-jenny5/'
								target='_blank'
								className='hover:text-orion'
							>
								LinkedIn
							</a>
						</div>
						<div className='flex gap-x-2'>
							🐈‍⬛
							<a
								href='https://github.com/kim-jenny5'
								target='_blank'
								className='hover:text-orion'
							>
								GitHub
							</a>
						</div>
						<div className='flex gap-x-2'>
							📄
							<a
								href='/resume.pdf'
								download='Jenny Kim Resume.pdf'
								className='hover:text-orion'
							>
								Resume
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='relative w-full h-full overflow-hidden row-start-2 row-span-5 col-start-2 col-span-6 tablet:col-start-4 tablet:row-start-3 tablet:row-span-4 tabletLandscape:row-start-3 tabletLandscape:col-start-5 tabletLandscape:col-span-4'>
				{renderPlaceholder('contact-profile')}
				<img
					src={profile}
					className={`absolute top-0 left-0 w-full h-full object-contain brightness-125 transition-opacity duration-500 ${
						isLoading('contact-profile') ? 'opacity-0' : 'opacity-100'
					}`}
					onLoad={() => handleImageLoad('contact-profile')}
				/>
			</div>
		</>
	);
}
