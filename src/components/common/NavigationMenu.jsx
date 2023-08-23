import { navigationMenu } from "../../data/data";

const NavigationMenu = () => {
  return (
    <ul className="navigation-menu flex items-center">
      {navigationMenu.map((menuItem) => (
        <li className="menu-item" key={menuItem.id}>
          <a
            href="#"
            className="menu-link font-semibold text text-dark no-wrap"
          >
            {menuItem.linkText}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
