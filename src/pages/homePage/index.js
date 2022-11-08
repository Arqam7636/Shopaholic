import React, { useState } from "react";
import ContentDivs from "../../components/contentDivs";
import DropDownMenu from "../../components/dropDownMenu";
import Fotter from "../../components/fotter";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import "./styles.scss";

function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="home_main">
      <div className="nav">
        <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      <div className="header">
        <Header />
      </div>

      <div className="main_content">
        <ContentDivs />
      </div>

      <div className="bottom_line">
        <div className="line"></div>
      </div>

      <div className="fotter">
        <Fotter />
      </div>

      {showMenu ? (
        <DropDownMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : null}
    </div>
  );
}

export default HomePage;
