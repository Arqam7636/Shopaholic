import React, { useState, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import "./styles.scss";

const NavBar = (props) => {
  const { showMenu, setShowMenu } = props;
  const [showMore, setShowMore] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const dropDownToggle = (e) => {
      if (showMore && ref.current && !ref.current.contains(e.target)) {
        setShowMore(false);
      }
    };
    document.addEventListener("mousedown", dropDownToggle);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", dropDownToggle);
    };
  }, [showMore]);

  return (
    <>
      <nav className="navBar_main">
        <div className="nb_logo">
          <p>Shopaholic</p>
          <MdMenu
            // style={{ transform: rotate, transition: "all 0.2s linear" }}
            // onClick={handleRotate}
            className="menu_icon"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>

        {/* <div className="menu">
          <MdMenu
            // style={{ transform: rotate, transition: "all 0.2s linear" }}
            // onClick={handleRotate}
            className="menu_icon"
          />
        </div> */}

        <div className="nb_links">
          <a href="#" className="nb_link">
            Home
          </a>

          <a href="#" className="nb_link">
            Monthly Best Sellers
          </a>

          <div className="nb_dropdown">
            <p onClick={() => setShowMore(!showMore)} className="dd_p">
              More
            </p>

            {showMore ? (
              <div ref={ref} className="dropdownMore">
                <a href="#" className="dd_link">
                  For him
                </a>
                <a href="#" className="dd_link">
                  For her
                </a>
                <a href="#" className="dd_link">
                  Home
                </a>
                <a href="#" className="dd_link">
                  Sports
                </a>
                <a href="#" className="dd_link">
                  Best Sellers
                </a>
                <a href="#" className="dd_link">
                  Tech
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className="nb_search">
          <input className="searchBar" type="search" placeholder="search " />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
