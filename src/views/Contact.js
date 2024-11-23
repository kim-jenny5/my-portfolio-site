import React from 'react';
import contact_profile from '../assets/images/contact_profile.jpg';
import arrow from '../assets/images/arrow.png';

export default function Contact() {
	return (
		<>
			<div className='row-start-1 col-start-1 col-end-12 flex items-end font-bold tablet:text-6xl desktop:text-8xl'>
				Contact Me
			</div>
			<div className='row-start-2 col-start-1 col-span-2 relative w-full h-full overflow-hidden -mt-20 ml-4'>
				<img
					src={arrow}
					className='absolute top-0 left-0 w-full h-full object-cover'
				/>
			</div>
			<div className='row-start-2 col-start-3 col-span-full flex flex-col justify-between'>
				<div>
					<a
						href='mailto:jennykimdev@gmail.com'
						className='text-3xl tracking-wider underline underline-offset-[12px] hover:text-orion'
					>
						jennykimdev@gmail.com
					</a>
				</div>
				<div className='flex flex-col gap-y-2 uppercase'>
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
					</div>
				</div>
			</div>
			<div className='row-start-1 row-span-2 col-end-11 col-span-3 relative w-full h-full overflow-hidden'>
				<img
					src={contact_profile}
					className='absolute top-0 left-0 w-full h-full object-contain brightness-125'
				/>
			</div>
		</>
	);
}
