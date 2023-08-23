import { useContext } from "react";
import { menu } from "../../utils/images";
import DropdownCurrency from "./DropdownCurrency";
import DropdownShipping from "./DropdownShipping";
import NavigationMenu from "./NavigationMenu";
import { SidebarContext } from "../../context/sidebarContext";

const Navbar = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <div className="navigation">
      <div className="navigation-content container flex items-center justify-between">
        <div className="navigation-left flex items-center hide-on--ms">
          <button type="button" className="sidenav-show-btn" onClick={openSidebar}>
            <img src={menu} />
          </button>
          <NavigationMenu />
        </div>
        <div className="navigation-right flex items-center">
          <DropdownCurrency />
          <DropdownShipping />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
