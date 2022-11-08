import React from "react";
import { FaInstagram, FaFacebook, FaSnapchat, FaTiktok } from "react-icons/fa";
import "./styles.scss";

const Fotter = () => {
  return (
    <div className="fotter_main">
      <div className="fotter_cont">
        <div className="fc_text">
          <p> Follow us on </p>
        </div>
        <div className="fc_social">
          <FaInstagram className="insta" />
          <FaFacebook className="facebook" />
          <FaSnapchat className="snapchat" />
          <FaTiktok className="tiktok" />
        </div>
      </div>

      <div className="fotter_copyrights">
        <p className="copyrights_text">
          Designed, developed and maintained by ARC Solutions. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Fotter;
