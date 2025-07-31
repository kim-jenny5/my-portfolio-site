import { NavLink } from 'react-router-dom';
import Nav from './Nav';

export default function Header({ style: styleFromProps, toggleMenu, isMenuOpen }) {
  return (
    <header
      className={`relative ${styleFromProps} flex select-none items-center justify-end text-obsidian`}
    >
      <NavLink
        to='/'
        className='absolute -bottom-12 -left-10 z-50 -rotate-90 text-center font-poppins text-2xl font-bold tracking-[-.075em] text-orion underline underline-offset-2'
      >
        jennykim .
      </NavLink>
      <>
        <div
          onClick={toggleMenu}
          className={`relative z-50 cursor-pointer rounded-full bg-mist px-2 py-0.5 font-poppins text-sm lowercase italic ${
            isMenuOpen ? 'pointer-events-none' : ''
          }`}
        >
          Menu
        </div>
        <Nav
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          style={`${
            isMenuOpen ? 'z-50 opacity-100 translate-y-1/3' : 'z-0 opacity-0 pointer-events-none'
          } absolute top-0 -right-2 bg-mist w-[150px] h-fit flex flex-col gap-y-1 items-end font-poppins text-sm shadow-lg p-4 transition duration-700 ease-in-out rounded-md`}
        />
      </>
    </header>
  );
}
