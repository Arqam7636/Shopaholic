import React from "react";
import babies from "../../imgs/babies.webp";
import best_seller from "../../imgs/best_seller.webp";
import games from "../../imgs/games.webp";
import health_beauty from "../../imgs/health_beauty.webp";
import her from "../../imgs/her.webp";
import him from "../../imgs/him.webp";
import pets from "../../imgs/pets.webp";
import home from "../../imgs/home.webp";
import sports from "../../imgs/sports.webp";
import tech from "../../imgs/tech.webp";

import "./styles.scss";

const ContentDivs = () => {
  return (
    <div className="contentDiv_main">
      <div className="contentDiv">
        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={him} alt="For Him" />
            <span className="div_img_text">For Him</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={her} alt="For Her" />
            <span className="div_img_text">For Her</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={home} alt="Home" />
            <span className="div_img_text">Home</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={babies} alt="For babies" />
            <span className="div_img_text">Baby and Kids</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={games} alt="Games" />
            <span className="div_img_text">Toys and Games </span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={sports} alt="Sports" />
            <span className="div_img_text">Sports</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={tech} alt="Tech" />
            <span className="div_img_text">Tech</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img
              className="div_img"
              src={health_beauty}
              alt="Health and Beauty"
            />
            <span className="div_img_text">Health and Beauty</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={pets} alt="Pets" />
            <span className="div_img_text">Pets</span>
          </div>
        </div>

        <div className="cd_div_cont">
          <div className="img_cont">
            <img className="div_img" src={best_seller} alt="Best Sellers" />
            <span className="div_img_text">Best Sellers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDivs;
