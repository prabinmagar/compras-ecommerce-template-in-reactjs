import PropTypes from "prop-types";
import { BsChevronLeft } from "react-icons/bs";

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-prev-arrow" onClick={onClick}>
    <BsChevronLeft />
  </button>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomPrevArrow;
