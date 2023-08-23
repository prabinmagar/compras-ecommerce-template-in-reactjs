import { cart, heart, message, person, profile, shopping_cart } from "../../utils/images";

const HeaderLinks = () => {
  return (
    <>
      <div className="hdr-navigation-bar--ms flex items-center show-on--ms">
        <a className="hdr-nav-item--ms" href="#">
          <img src={shopping_cart} />
        </a>
        <a className="hdr-nav-item--ms" href="#">
          <img src={person} />
        </a>
      </div>

      <ul className="hdr-navigation-bar flex items-end hide-on--ms">
        <li className="hdr-nav-item flex items-center justify-center flex-wrap flex-col">
          <div className="hdr-nav-icon flex items-center justify-center">
            <img src={profile} />
          </div>
          <span className="text-xs text-gray-500 text-center hdr-nav-text">
            Profile
          </span>
        </li>
        <li className="hdr-nav-item flex items-center justify-center flex-wrap flex-col">
          <div className="hdr-nav-icon flex items-center justify-center">
            <img src={message} />
          </div>
          <span className="text-xs text-gray-500 text-center hdr-nav-text">
            Message
          </span>
        </li>
        <li className="hdr-nav-item flex items-center justify-center flex-wrap flex-col">
          <div className="hdr-nav-icon flex items-center justify-center">
            <img src={heart} />
          </div>
          <span className="text-xs text-gray-500 text-center hdr-nav-text">
            Orders
          </span>
        </li>
        <li className="hdr-nav-item flex items-center justify-center flex-wrap flex-col">
          <div className="hdr-nav-icon flex items-center justify-center">
            <img src={cart} />
          </div>
          <span className="text-xs text-gray-500 text-center hdr-nav-text">
            My Cart
          </span>
        </li>
      </ul>
    </>
  );
};

export default HeaderLinks;
