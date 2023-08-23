import Banner from "../common/Banner";
import CategoryList from "../common/CategoryList";
import Offers from "../common/Offers";

const TopMain = () => {
  return (
    <section className="top-main">
      <div className="container">
        <div className="top-main-content border-radius-6 border-gray-300 grid theme-p">
          <CategoryList />
          <Banner />
          <Offers />
        </div>
      </div>
    </section>
  );
};

export default TopMain;
