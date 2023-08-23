import { search_gray } from "../../utils/images";

const HeaderSearchBar = () => {
  return (
    <form className="hdr-search-bar flex items-stretch w-full hide-on--ms border-radius-6 overflow-hidden">
      <span className="search-icon flex items-center justify-center">
        <img src={search_gray} />
      </span>
      <input type="text" placeholder="Search" />
      <div className="select-wrapper flex items-center hide-on--ms">
        <select>
          <option>All Category</option>
          <option>Accessories</option>
          <option>Gadgets</option>
          <option>Clothing</option>
        </select>
      </div>
      <button
        type="submit"
        className="searchbar-btn text-white flex items-center text-center justify-center w-full hide-on--ms"
      >
        Search
      </button>
    </form>
  );
};

export default HeaderSearchBar;
