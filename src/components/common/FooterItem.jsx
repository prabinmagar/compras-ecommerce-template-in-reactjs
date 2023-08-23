import PropTypes from "prop-types";

const FooterItem = ({ linksData }) => {
  console.log(linksData);
  return (
    <div className="footer-item">
      <p className="footer-item-title font-medium text-dark">
        {linksData.title}
      </p>
      <div className="footer-links">
        {linksData.links.map((link, idx) => (
          <a href="#" key={idx} className="text-gray-500 text">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

FooterItem.propTypes = {
  linksData: PropTypes.object,
};

export default FooterItem;
