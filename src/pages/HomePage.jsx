import Deals from "../components/sections/Deals";
import TopMain from "../components/sections/TopMain";
import ProductDisplayGrid from "../components/product/ProductDisplayGrid";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Recommend from "../components/sections/Recommend";
import Services from "../components/sections/Services";
import Newsletter from "../components/sections/Newsletter";
import Suppliers from "../components/sections/Suppliers";

const HomePage = () => {
  return (
    <main className="home-page">
      <TopMain />
      <Deals />
      <ProductDisplayGrid />
      <ProductDisplayGrid />
      {/* <div className="products-display-grid display-grid-two">
        <div className="container">
          <div className="display-grid-content grid border-radius-6 border-gray-300">
            <div className="products-source">
              <img
                src="./assets/images/display-grid-two-img.png"
                alt=""
                className="object-fit-cover"
              />
              <div className="products-source-info">
                <p className="text-lg text-dark source-info-title font-semibold">
                  Consumer electronics and gadgets
                </p>
                <a href="#" className="btn btn-white">
                  Source now
                </a>
              </div>
            </div>
            <div className="products-list display-slider w-full overflow-hidden">
              <div className="product-item">
                <div className="item-name">Smartwatches</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p9.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Camera</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p10.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Headphones</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p11.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Utensils</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p12.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Headphones</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      Soft Mattress
                      <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p13.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Laptops & PCs</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p14.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Mobile Devices</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p15.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="item-name">Smartphones</div>
                <div className="item-info flex justify-between">
                  <div className="item-info-text">
                    <p className="text-gray-500">
                      From <br /> USD 19
                    </p>
                  </div>
                  <div className="item-info-img overflow-hidden flex items-center justify-center w-full">
                    <img src="./assets/images/p16.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Recommend />
      <Services />
      <Suppliers />
      <Newsletter />
    </main>
  );
};

export default HomePage;
