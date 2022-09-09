import { Link } from 'react-router-dom';
import { MenuItem } from '../../types/menu-item';
import { MenuItems } from './MenuItems';

const DesktopNavigation = () => {
  return (
    <div className="et-navigation__parent">
      <div className="et-navigation__child">
        <ul className="et-navigation__desktop">
          {MenuItems.map((item: MenuItem) => {
            return (
              <li className="et-nav-item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavigation;