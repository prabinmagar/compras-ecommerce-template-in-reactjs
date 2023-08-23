import { useContext } from "react";
import { avatar_person } from "../../utils/images";
import { SidebarContext } from "../../context/sidebarContext";

const SideNavigation = () => {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <nav className={`sidenav bg-white ${isSidebarOpen ? "show" : ""}`}>
      <button type="button" className="sidenav-hide-btn" onClick={ closeSidebar }>
        <i className="fas fa-close"></i>
      </button>
      <div className="sidenav-wrapper">
        <div className="sidenav-top grid">
          <div className="avatar">
            <img src={avatar_person} alt="" />
          </div>
          <div className="links-group">
            <a href="#" className="text-dark text text-base">
              Sign in
            </a>
            <span className="link-separator">|</span>
            <a href="#" className="text-dark text text-base">
              Register
            </a>
          </div>
        </div>

        <div className="sidenav-main">
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fas fa-list"></i>
            </span>
            <span className="text text-base text-dark">Home</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fas fa-home"></i>
            </span>
            <span className="text text-base text-dark">Categories</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fa-regular fa-heart"></i>
            </span>
            <span className="text text-base text-dark">Favorites</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fas fa-box"></i>
            </span>
            <span className="text text-base text-dark">My orders</span>
          </a>
          <div className="sidenav-item-separator"></div>
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fas fa-globe"></i>
            </span>
            <span className="text text-base text-dark">English | USD</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fas fa-headphones"></i>
            </span>
            <span className="text text-base text-dark">Contact us</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span className="sidenav-item-icon">
              <i className="fas fa-building"></i>
            </span>
            <span className="text text-base text-dark">About</span>
          </a>
          <div className="sidenav-item-separator"></div>
          <a href="#" className="sidenav-item grid">
            <span></span>
            <span className="text text-base text-dark">User agreement</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span></span>
            <span className="text text-base text-dark">Partnership</span>
          </a>
          <a href="#" className="sidenav-item grid">
            <span></span>
            <span className="text text-base text-dark">Privacy policy</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideNavigation;
