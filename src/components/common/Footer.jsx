import { footerLinks, socialLinks } from "../../data/data";
import { app_store, google_play } from "../../utils/images";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="footer-content grid">
          <div className="footer-item">
            <a href="index.html" className="site-brand flex items-center">
              <span className="brand-text font-bold">
                Com<span className="text-blue">pras.</span>
              </span>
            </a>
            <p className="text text-gray-600 brand-intro text-base">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <ul className="social-links flex">
              {socialLinks.map((socialLink, idx) => (
                <li key={idx}>
                  <a href="#">
                    <img src={socialLink} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {
            footerLinks.map((footerLink, idx) => (
              <FooterItem key = {idx} linksData = {footerLink} />
            ))
          }

          <div className="footer-item">
            <p className="footer-item-title font-medium text-dark">Get app</p>
            <div className="store-links flex flex-col">
              <a href="#" className="store-link">
                <img src={app_store} />
              </a>
              <a href="#" className="store-link">
                <img src={google_play} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p className="footer-text text-gray-800">&copy; 2023 Ecommerce.</p>
      </div>
    </footer>
  );
};

export default Footer;
