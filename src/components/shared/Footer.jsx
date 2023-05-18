import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 bg-warning text-black rounded-t-lg">
        <div className="flex">
          <div className="w-1/2 flex items-center">
            <div>
              <img src="/logo.png" className="h-28 w-28" alt="" />
              <p className="text-base font-medium">
                Toy Galaxy Enterprise.
                <br />
                Providing reliable toys to create happiness
                <br />
              </p>
            </div>
          </div>
          <div>
            {/* social media section */}
            <div className="mb-6">
              <h3 className="mb-4 text-gray-500 text-lg font-medium">
                Find Us On
              </h3>
              <div className="grid grid-flow-col gap-4 text-2xl">
                <a>
                  <FaTwitter></FaTwitter>
                </a>
                <a>
                  <FaYoutube></FaYoutube>
                </a>
                <a>
                  <FaFacebookF></FaFacebookF>
                </a>
              </div>
            </div>

            {/* contact us section */}
            <div>
              <h3 className="mb-5 text-gray-500 text-lg font-medium">
                Contact Us
              </h3>
              <div>
                <div className="flex items-baseline mb-2">
                  <FaHome></FaHome>
                  <p className="ml-2 text-sm font-medium">
                    1203 Town Center Drive <br />
                    FL 33458 USA
                  </p>
                </div>
                <div className="flex items-baseline mb-2">
                  <FaPhoneAlt></FaPhoneAlt>
                  <p className="ml-2 text-sm font-medium">+012 345 6789</p>
                </div>
                <div className="flex items-baseline mb-2">
                  <FaEnvelope></FaEnvelope>
                  <p className="ml-2 text-sm font-medium">toy@galaxy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-primary text-sm font-medium mt-5">
          Copyright © 2023 - All right reserved by Toy Galaxy Enterprise
        </p>
      </footer>
    </div>
  );
};

export default Footer;

/**
 * 
        <p className="text-sm font-medium text-center">
          Copyright © 2023 - All right reserved by ACME Industries Ltd
        </p>
 */
