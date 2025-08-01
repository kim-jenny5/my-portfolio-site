import { useImageLoader } from '../utils/useImageLoader';
import WindowWrapper from '../components/WindowWrapper';
import { S3_BASE_URL } from '../utils/constants';

export default function About() {
  const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

  return (
    <>
      <div className='col-span-full row-span-full row-start-6 flex flex-col gap-y-4 tablet:col-start-2 tablet:col-end-12 tablet:row-start-8 tabletLandscape:col-end-12 tabletLandscape:row-start-7'>
        <div>
          I'm a fullstack engineer, with a focus in frontend, based in New York City. With an
          interest and tact for design, I have a passion for creating and maintaining aesthetic UIs
          for an enhanced, pleasing experience. In my free time, I love to explore the city and its
          numerous "hidden gems" with my friends, crochet, and watch TV/movies as I cuddle with my
          cat, Kiyo&ndash;the cutest cat alive, objectively.
        </div>
        <div>
          <div className='text-sm font-bold uppercase tracking-wide'>Frontend</div>
          <div>
            JavaScript / TypeScript / HTML / CSS / React / Next.js / Redux / Motion / Hotwire
            Stimulus / Hotwire Turbo
          </div>
        </div>
        <div>
          <div className='text-sm font-bold uppercase tracking-wide'>Backend</div>
          <div>Ruby on Rails / PostgreSQL / Supabase / Neon / Drizzle ORM / SQLite</div>
        </div>
        <div>
          <div className='text-sm font-bold uppercase tracking-wide'>Design</div>
          <div>Tailwind CSS / Tailwind UI / styled-components / Bootstrap / MUI / Figma</div>
        </div>
      </div>
      <WindowWrapper style='row-start-1 row-span-5 col-start-3 col-span-full tablet:row-start-2 tablet:row-span-6 tablet:col-start-4 tablet:col-span-6 tabletLandscape:row-start-1 tabletLandscape:col-start-5 tabletLandscape:col-end-9'>
        {renderPlaceholder('about-profile')}
        <img
          src={`${S3_BASE_URL}/profile/about.png`}
          alt='woman smiling with her cat'
          className={`absolute left-0 top-0 h-full w-full object-cover object-[0%_10%] transition-opacity duration-500 ${
            isLoading('about-profile') ? 'opacity-0' : 'opacity-100'
          }`}
          loading='lazy'
          onLoad={() => handleImageLoad('about-profile')}
        />
      </WindowWrapper>
    </>
  );
}
