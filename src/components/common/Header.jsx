import HeaderLinks from "./HeaderLinks";
import HeaderSearchBar from "./HeaderSearchBar";
import Navbar from "./Navbar";
import SiteBrand from "./SiteBrand";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="container header-top flex items-center justify theme-py">
          <SiteBrand />
          <HeaderSearchBar />
          <HeaderLinks />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
