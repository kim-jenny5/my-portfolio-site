import { NavLink } from 'react-router-dom';
import { useClickOutside } from '../utils/useClickOutside';

function NavItem({ to, toggleMenu, name }) {
  return (
    <NavLink to={to} onClick={toggleMenu}>
      {({ isActive }) => (
        <div className='flex items-center hover:text-orion'>
          {isActive && (
            <span className='mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-black'></span>
          )}
          {name}
        </div>
      )}
    </NavLink>
  );
}

export default function Nav({ toggleMenu = () => {}, style: styleFromProps, isMenuOpen }) {
  const ref = useClickOutside(() => toggleMenu(), isMenuOpen);

  const paths = [
    { to: '/', name: 'home' },
    { to: '/about', name: 'about' },
    { to: '/contact', name: 'contact' },
    { to: '/projects', name: 'projects' },
  ];

  return (
    <div ref={ref} className={styleFromProps}>
      {paths.map((path) => (
        <NavItem key={path.to} to={path.to} name={path.name} toggleMenu={toggleMenu} />
      ))}
    </div>
  );
}
