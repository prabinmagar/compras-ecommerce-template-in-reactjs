import { menu } from "../../utils/images";
import { SidebarContext } from "../../context/sidebarContext";
import { useContext } from "react";

const SiteBrand = () => {
  const { openSidebar } = useContext(SidebarContext);
  return (
    <div className="flex items-center site-brand-wrapper">
      <button type="button" className="sidebar-open-btn--ms" onClick={openSidebar}>
        <img src={menu} alt="" />
      </button>
      <a href="index.html" className="site-brand flex items-center">
        <span className="brand-text font-bold">
          Com<span className="text-blue">pras.</span>
        </span>
      </a>
    </div>
  );
};

export default SiteBrand;
