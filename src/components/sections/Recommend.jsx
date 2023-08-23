import { recommend_1 } from "../../utils/images";

const Recommend = () => {
  return (
    <section className="sc-recommend">
      <div className="container">
        <div className="recommend-content">
          <h3 className="title">Recommended Products</h3>
          <div className="recommend-products-list grid">
            <div className="product-item overflow-hidden border-radius-6 border-gray-200">
              <div className="item-img overflow-hidden flex items-center justify-center">
                <img src={recommend_1} alt="" />
              </div>
              <div className="item-info">
                <span className="text text-dark font-medium">$10.30</span>
                <p className="text text-gray-500">
                  T-shirts with multiple colors, for men
                </p>
              </div>
            </div>

            <div className="product-item overflow-hidden border-radius-6 border-gray-200">
              <div className="item-img overflow-hidden flex items-center justify-center">
                <img src={recommend_1} alt="" />
              </div>
              <div className="item-info">
                <span className="text text-dark font-medium">$10.30</span>
                <p className="text text-gray-500">
                  T-shirts with multiple colors, for men
                </p>
              </div>
            </div>

            <div className="product-item overflow-hidden border-radius-6 border-gray-200">
              <div className="item-img overflow-hidden flex items-center justify-center">
                <img src={recommend_1} alt="" />
              </div>
              <div className="item-info">
                <span className="text text-dark font-medium">$10.30</span>
                <p className="text text-gray-500">
                  T-shirts with multiple colors, for men
                </p>
              </div>
            </div>

            <div className="product-item overflow-hidden border-radius-6 border-gray-200">
              <div className="item-img overflow-hidden flex items-center justify-center">
                <img src={recommend_1} alt="" />
              </div>
              <div className="item-info">
                <span className="text text-dark font-medium">$10.30</span>
                <p className="text text-gray-500">
                  T-shirts with multiple colors, for men
                </p>
              </div>
            </div>

            <div className="product-item overflow-hidden border-radius-6 border-gray-200">
              <div className="item-img overflow-hidden flex items-center justify-center">
                <img src={recommend_1} alt="" />
              </div>
              <div className="item-info">
                <span className="text text-dark font-medium">$10.30</span>
                <p className="text text-gray-500">
                  T-shirts with multiple colors, for men
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
