import PropTypes from "prop-types";
import { BsChevronRight } from "react-icons/bs";

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-next-arrow" onClick={onClick}>
    <BsChevronRight />
  </button>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomNextArrow;
