import Slider from "react-slick";
import {
  product_1,
  product_2,
  product_3,
  product_4,
  product_5,
} from "../../utils/images";
import CustomPrevArrow from "../common/CustomPrevArrow";
import CustomNextArrow from "../common/CustomNextArrow";

const Deals = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="sc-deals">
      <div className="container">
        <div className="deals-content grid border-gray-300 border-radius-6">
          <div className="deals-countdown theme-p">
            <div className="deals-title">
              <h4 className="text-lg text-dark deals-countdown-title">
                Deals and offers
              </h4>
              <p className="text text-gray-500">Hygiene equipments</p>
            </div>
            <div className="countdown-elems grid">
              <div className="countdown-elem text-center border-radius-6 flex flex-col items-center justify-center">
                <span className="countdown-elem-value font-bold text text-gray-500">
                  04
                </span>
                <span className="countdown-elem-unit text-gray-500 text-xs">
                  Days
                </span>
              </div>
              <div className="countdown-elem text-center border-radius-6 flex flex-col items-center justify-center">
                <span className="countdown-elem-value font-bold text text-gray-500">
                  13
                </span>
                <span className="countdown-elem-unit text-gray-500 text-xs">
                  Hour
                </span>
              </div>
              <div className="countdown-elem text-center border-radius-6 flex flex-col items-center justify-center">
                <span className="countdown-elem-value font-bold text text-gray-500">
                  34
                </span>
                <span className="countdown-elem-unit text-gray-500 text-xs">
                  Min
                </span>
              </div>
              <div className="countdown-elem text-center border-radius-6 flex flex-col items-center justify-center">
                <span className="countdown-elem-value font-bold text text-gray-500">
                  56
                </span>
                <span className="countdown-elem-unit text-gray-500 text-xs">
                  Sec
                </span>
              </div>
            </div>
          </div>

          <Slider
            nextArrow={<CustomNextArrow /> }
            prevArrow={<CustomPrevArrow />}
            {...settings}
            className="deals-products offers-slider w-full overflow-hidden"
          >
            <div className="deals-item text-center">
              <div className="item-img flex items-center justify-center overflow-hidden">
                <img src={product_1} alt="" />
              </div>
              <div className="item-info">
                <p className="item-name text text-dark">Smart watches</p>
                <span className="badge badge-off text-sm">-25%</span>
              </div>
            </div>
            <div className="deals-item text-center">
              <div className="item-img flex items-center justify-center">
                <img src={product_2} alt="" />
              </div>
              <div className="item-info">
                <p className="item-name text text-dark">Laptops</p>
                <span className="badge badge-off text-sm">-25%</span>
              </div>
            </div>
            <div className="deals-item text-center">
              <div className="item-img flex items-center justify-center">
                <img src={product_3} alt="" />
              </div>
              <div className="item-info">
                <p className="item-name text text-dark">GoPro cameras</p>
                <span className="badge badge-off text-sm">-25%</span>
              </div>
            </div>
            <div className="deals-item text-center">
              <div className="item-img flex items-center justify-center">
                <img src={product_4} alt="" />
              </div>
              <div className="item-info">
                <p className="item-name text text-dark">Smart watches</p>
                <span className="badge badge-off text-sm">-25%</span>
              </div>
            </div>
            <div className="deals-item text-center">
              <div className="item-img flex items-center justify-center">
                <img src={product_5} alt="" />
              </div>
              <div className="item-info">
                <p className="item-name text text-dark">Headphones</p>
                <span className="badge badge-off text-sm">-25%</span>
              </div>
            </div>
            <div className="deals-item text-center">
              <div className="item-img flex items-center justify-center">
                <img src={product_5} alt="" />
              </div>
              <div className="item-info">
                <p className="item-name text text-dark">Canon camreras</p>
                <span className="badge badge-off text-sm">-25%</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Deals;
