import Slider from "react-slick";
import { display_grid_one_img, p1 } from "../../utils/images";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";

const ProductDisplayGrid = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
  };

  return (
    <div className="products-display-grid display-grid-one">
      <div className="container">
        <div className="display-grid-content overflow-hidden grid border-radius-6 border-gray-300">
          <div className="products-source">
            <img
              src={display_grid_one_img}
              className="object-fit-cover"
              alt=""
            />
            <div className="products-source-info">
              <p className="text-lg text-dark source-info-title font-semibold">
                Home and outdoor
              </p>
              <a href="#" className="btn btn-white">
                Source now
              </a>
            </div>
          </div>
          <Slider
            nextArrow={<CustomNextArrow /> }
            prevArrow={<CustomPrevArrow />}
            {...settings}
            className="products-list display-slider w-full overflow-hidden"
          >
            <div className="product-item">
              <div className="item-name">Comfy chairs</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Kitchen Mixers</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Home decors</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Blendors</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Soft chairs</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    Soft Mattress
                    <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Home appliance</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Decoration Pot</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item-name">Vase</div>
              <div className="item-info flex justify-between">
                <div className="item-info-text">
                  <p className="text-gray-500">
                    From <br /> USD 19
                  </p>
                </div>
                <div className="item-info-img flex items-center justify-center overflow-hidden">
                  <img src={p1} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayGrid;
