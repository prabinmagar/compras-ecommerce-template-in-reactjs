import { banner } from "../../utils/images";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      <div className="banner-content">
        <p className="banner-text font-semibold">Latest trending</p>
        <h2 className="banner-title font-bold">Electronic items</h2>
        <a href="" className="btn btn-white">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Banner;
