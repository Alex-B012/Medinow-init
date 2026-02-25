import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { footer_data } from "../data/data";
import { footer_links } from "../data/links";

const Footer = () => {
  return (
    <footer className="footer w-full mt-24 px-4 py-8  flex flex-col">
      <div className="footer-container w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="footer__promo md:w-1/2">
          <Logo isLink={true} />
          <p className="footer__promo-text my-4">
            {footer_data.promo_text.text}
          </p>
        </div>

        <div className="footer-info w-full md:w-1/2 md:pt-2 flex flex-col sm:flex-row justify-between items-start sm:pl-[10vw] sm:gap-12 md:gap-6 lg:gap-12">
          <div className="footer-links w-full">
            <h4 className="footer-links__title uppercase font-bold mb-6">
              {footer_data.promo_text.title}
            </h4>
            <div className="footer-links__list min-w-25">
              {footer_links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="footer__link block my-2 hover:text-emerald-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__contacts w-full ">
            <h4 className="footer-links__title uppercase font-bold mb-6">
              {footer_data.contacts.title}
            </h4>

            <address className="footer__contacts-container not-italic">
              {footer_data.contacts.phone && (
                <p className="footer__contacts-phone my-2 hover:text-emerald-400">
                  <a href={`tel:${footer_data.contacts.phone}`}>
                    {footer_data.contacts.phone}
                  </a>
                </p>
              )}

              {footer_data.contacts.email && (
                <p className="footer__contacts-email my-2 hover:text-emerald-400">
                  <a href={`mailto:${footer_data.contacts.email}`}>
                    {footer_data.contacts.email}
                  </a>
                </p>
              )}
            </address>
          </div>
        </div>
      </div>
      <div className="footer__copyright w-full text-center mt-8 pt-4 flex flex-col sm:flex-row justify-center items-center border-t border-t-gray-400">
        <p className="footer__copyright-text mr-1">
          {footer_data.copyright.text.line1}
        </p>
        <p className="footer__copyright-text">
          {footer_data.copyright.text.line2}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
