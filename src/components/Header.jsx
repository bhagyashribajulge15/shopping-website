import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <FaTwitter />
            </div>{" "}
            <div className="header_top_icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - 500
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD">USD $</option>
              <option value="eEURur">EUR </option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
