import { HOME_SVG, PEOPLE_SVG, MENU_DOTS_SVG, GROUP_SVG, BELL_SVG } from './images';
import MenuItem from './MenuItem';
import './styles.css';

export default function SideMenu() {
  const menu = [
    {
      icon: HOME_SVG,
      name: 'Home',
    },
    {
      icon: PEOPLE_SVG,
      name: 'People',
    },
    {
      icon: MENU_DOTS_SVG,
      name: 'Menu',
    },
    {
      icon: GROUP_SVG,
      name: 'Group',
    },
    {
      icon: BELL_SVG,
      name: 'Bell',
    },
  ];

  return (
    <div className="w-25 mt-3 mx-5 mb-2">
      <img src={require('./images/facebook_logo.png')} className="logo-icon" />

      {menu.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}
