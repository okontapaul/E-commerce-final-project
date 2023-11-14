import React from "react";
import { Link } from "react-router-dom";
// import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="conmmtainer-xxl">
          <div className="row align align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-4"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4"> Contact Us</h4>
              <div>
                <address className="text-white ">
                  Hno : 166 Herbert Macualay way, <br /> Adekunle Bus-Stop
                  <br /> Yaba, Mainland
                  <br />
                  PinCode: 131103
                </address>
                <a
                  href=" tel: 0916277908"
                  className="mt-3 d-block mb-0 text-white"
                >
                  +234-091117908
                </a>
                <a
                  href=" tel: 0916277908"
                  className="mt-2 d-block mb-0 text-white"
                >
                  voltsautocare@yahoo.com
                </a>
                <div className="social_icons">
                  <a className="text-white" href=" ">
                    <FaGithub className="fs-4" />
                  </a>
                  <a className="text-white" href=" ">
                    <FaInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href=" ">
                    <FaLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href=" ">
                    <FaYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}; Powered by Developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
